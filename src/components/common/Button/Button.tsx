import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { BooleanProps, cls, useBooleanPropParser } from '@/utils';

const ButtonStyleUnionList = ['solid', 'bordered'] as const;
type ButtonStyleUnion = typeof ButtonStyleUnionList[number];
const buttonBooleanProps = {
  buttonStyle: ButtonStyleUnionList,
};

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

function Button(buttonProps: ButtonProps & BooleanProps<{ buttonStyle?: ButtonStyleUnion }>) {
  const { buttonStyle = 'solid', ...props } = useBooleanPropParser(buttonProps, buttonBooleanProps);

  if (buttonStyle === 'solid') {
    return <SolidButton {...props} />;
  } else if (buttonStyle === 'bordered') {
    return <BorderedButton {...props} />;
  } else {
    if (process.env.NODE_ENV === 'development') {
      throw new Error(`Unknown button style: ${buttonStyle}`);
    } else {
      console.error(`Unknown button style: ${buttonStyle}`);
      return null;
    }
  }
}

export default Button;

export function BorderedButton(buttonProps: ButtonProps) {
  const { children, className, ...rest } = buttonProps;

  return (
    <button
      {...rest}
      className={cls`self-center whitespace-nowrap rounded-md border-0.5 border-sky-500 py-2 px-10 text-sky-700 ${className}`}>
      {children}
    </button>
  );
}

export function SolidButton(buttonProps: ButtonProps) {
  const { children, className, ...rest } = buttonProps;

  return (
    <button
      {...rest}
      className={cls`self-center whitespace-nowrap rounded-md bg-sky-500 py-2 px-10 text-white ${className}`}>
      {children}
    </button>
  );
}
