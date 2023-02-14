import { useMemo } from 'react';

export function includes<List extends Array<any> | ReadonlyArray<any>>(
  list: List,
  item: any,
): item is List[number] {
  return list.includes(item);
}

function generateEntriesFromLists<
  P extends Record<string, any>,
  Keys extends keyof P,
  BP extends P[Keys],
>(unionLists: Record<Keys, ReadonlyArray<BP>>) {
  const unionEntries = Object.entries<ReadonlyArray<BP>>(unionLists) as Array<
    [Keys, ReadonlyArray<BP>]
  >;

  return unionEntries;
}

function parseBooleanProps<P extends Record<string, any>, Keys extends keyof P, BP extends P[Keys]>(
  originalProps: P,
  unionLists: Readonly<Record<Keys, ReadonlyArray<BP>>>,
): Omit<P, BP> {
  // copy props to new object without configurable descriptors
  const configurableProps = Object.assign({}, originalProps);

  const unionEntries = Object.entries<ReadonlyArray<BP>>(unionLists) as Array<
    [Keys, ReadonlyArray<BP>]
  >;

  unionEntries.forEach(([unionKey, unionList]) => {
    if (originalProps[unionKey] !== undefined) {
      configurableProps[unionKey] = originalProps[unionKey];
      return;
    }

    unionList.forEach(union => {
      if (configurableProps[union] === true) {
        configurableProps[unionKey] = union;
        delete configurableProps[union];
      }
    });
  });

  Object.freeze(configurableProps);

  return configurableProps;
}

/**
 * @deprecated 타입 추론이 제대로 되지 않아 사용을 권장하지 않습니다.
 */
export function createBooleanPropParser<
  P extends Record<string, any>,
  Keys extends keyof P,
  BP extends P[Keys],
>(unionLists: Readonly<Record<Keys, ReadonlyArray<BP>>>): (props: P) => Omit<P, BP> {
  function parser(props: P): Omit<P, BP> {
    return parseBooleanProps(props, unionLists);
  }
  return parser;
}

/**
 * @deprecated 컴포넌트 내부에서 사용하려면 useBooleanPropParser를 사용해야 합니다.
 */
export function parseComponentBooleanProps<
  P extends Record<string, any>,
  Keys extends keyof P,
  BP extends P[Keys],
>(props: P, unionLists: Record<Keys, ReadonlyArray<BP>>): Omit<P, BP> {
  return parseBooleanProps(props, unionLists);
}

export function useBooleanPropParser<
  P extends Record<string, any>,
  Keys extends keyof P,
  BP extends P[Keys],
>(props: P, unionLists: Record<Keys, ReadonlyArray<BP>>) {
  const parsedProps = useMemo(() => parseBooleanProps(props, unionLists), [props, unionLists]);

  return parsedProps;
}

export type WithBooleanProps<
  P extends Record<string, any>,
  BooleanProps extends Record<string, string>,
> = P &
  BooleanProps & {
    [K in BooleanProps[keyof BooleanProps]]?: boolean;
  };

export type BooleanProps<BooleanProps extends Record<string, string>> = BooleanProps & {
  [K in BooleanProps[keyof BooleanProps]]?: boolean;
};
