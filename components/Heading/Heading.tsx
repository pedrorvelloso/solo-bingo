import { Size } from '@/interfaces';

import { HeadingStyled } from './styles';

interface HeadingProps {
  size?: Size;
}

const Heading: React.FC<HeadingProps> = ({ children, size = 'lg' }) => {
  return <HeadingStyled size={size}>{children}</HeadingStyled>;
};

export default Heading;
