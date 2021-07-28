import { darken } from 'polished';
import styled from 'styled-components';

export const TimerContainer = styled.div`
  background-color: ${(props) => darken(0.33, props.theme.background.color)};
  width: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.5rem;
  font-family: monospace;

  padding: 25px;

  margin-right: 14px;

  border-radius: 5px;
`;

export const ControllersContainer = styled.div`
  display: flex;
`;
