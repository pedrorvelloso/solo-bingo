import { css, FlattenSimpleInterpolation } from 'styled-components';
import { MarginOptions, margin } from './margin';

export type DeclarativeUI = MarginOptions;

export const declarativeUI = (
  declarative: DeclarativeUI,
): FlattenSimpleInterpolation => css`
  ${declarative && margin(declarative)}
`;
