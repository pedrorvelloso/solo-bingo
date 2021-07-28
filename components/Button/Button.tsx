import { ButtonHTMLAttributes } from 'react';
import { DeclarativeUI } from '@/styles/declarative';
import { Colors } from '@/interfaces';

import { ButtonStyled } from './styles';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DeclarativeUI {
  color?: Colors;
  filled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  filled = false,
  children,
  ...props
}) => {
  return (
    <ButtonStyled type="button" color={color} filled={filled} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
