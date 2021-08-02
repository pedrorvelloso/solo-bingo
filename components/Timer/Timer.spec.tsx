import { render, screen } from 'test-utils';
import Timer from './Timer';

describe('components > Timer', () => {
  it('should render without crashing', () => {
    render(
      <Timer
        isFinished={false}
        countdown
        hours="0"
        minutes="00"
        seconds="00"
        deciseconds="0"
      />,
    );

    expect(screen.queryByText('00')).toBeDefined();
  });

  it('should not render - when not on countdown', () => {
    render(
      <Timer
        isFinished
        countdown={false}
        hours="0"
        minutes="00"
        seconds="00"
        deciseconds="0"
      />,
    );

    expect(screen.queryByText('-')).not.toBeInTheDocument();
  });
});
