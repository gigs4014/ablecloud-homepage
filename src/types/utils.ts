export type RecursiveStructure<K extends string | number | symbol, T> = {
  [P in K]: RecursiveStructure<K, T> | T;
};
