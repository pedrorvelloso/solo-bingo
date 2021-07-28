import styled from 'styled-components';
import { Size } from '@/interfaces';

interface HeadingStyledProps {
  size: Size;
}

export const HeadingStyled = styled.h1<HeadingStyledProps>`
  font-size: ${({ theme, size }) => theme.font.size[size]};
`;
