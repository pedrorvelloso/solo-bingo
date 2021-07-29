import styled, { css } from 'styled-components';

import { darken } from 'polished';
import { declarativeUI, DeclarativeUI } from '@/styles/declarative';
import { Colors } from '@/interfaces';

interface ButtonStyledProps extends DeclarativeUI {
  color: Colors;
  filled?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${declarativeUI}

  background-color: ${(props) =>
    props.filled
      ? props.theme.colors[props.color]
      : darken(0.41, props.theme.colors[props.color])};
  border: 1px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: 5px;

  color: #ffffff;

  padding: 15px 25px;

  flex: 1;

  text-transform: uppercase;
  font-family: monospace;

  transition: all 150ms ease-in-out;

  :hover:enabled {
    background-color: ${(props) => props.theme.colors[props.color]};

    ${(props) =>
      props.filled &&
      css`
        background-color: ${darken(0.41, props.theme.colors[props.color])};
      `}
  }

  :disabled {
    cursor: not-allowed;
    filter: grayscale(0.9);
  }
`;
