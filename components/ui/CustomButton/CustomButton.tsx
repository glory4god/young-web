import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rest?: any;
}
const CustomButton = (props: ButtonProps) => {
  const { rest } = props;
  return <button {...rest}>CustomButton</button>;
};

export default CustomButton;
