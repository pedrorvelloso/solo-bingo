import { ThemeProvider } from 'styled-components';
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import theme from '../styles/theme';

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
