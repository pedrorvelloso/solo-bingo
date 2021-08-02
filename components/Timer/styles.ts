import { darken } from 'polished';
import styled, { css } from 'styled-components';

type TimeContainerProps = {
  finshed: boolean;
};

export const TimerContainer = styled.div<TimeContainerProps>`
  background-color: ${(props) => darken(0.1, props.theme.background.color)};
  width: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.5rem;
  font-family: monospace;

  padding: 25px;

  margin-right: 14px;

  border-radius: 5px;

  transition: all 0.2s ease-in;

  border: 1px solid ${(props) => darken(0.1, props.theme.background.color)};

  ${(props) =>
    props.finshed &&
    css`
      border: 1px solid ${props.theme.colors.success};
    `}
`;
