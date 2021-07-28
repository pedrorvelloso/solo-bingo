import { css, FlattenSimpleInterpolation } from 'styled-components';

export interface MarginOptions {
  mr?: string;
  ml?: string;
}

export const margin = ({
  mr,
  ml,
}: MarginOptions): FlattenSimpleInterpolation => css`
  margin-right: ${mr};
  margin-left: ${ml};
`;
