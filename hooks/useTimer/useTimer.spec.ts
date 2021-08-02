import { renderHook, act } from '@testing-library/react-hooks';
import useTimer from './useTimer';

jest.useFakeTimers();

describe('containers > TimerStatus > useTimer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('should increment timer', () => {
    const { result } = renderHook(() => useTimer({}));

    act(() => {
      result.current.start();
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.deciseconds).toBe('9');
  });

  it('should run countdown before counting up', () => {
    const { result } = renderHook(() => useTimer({ countdown: 1 }));

    act(() => {
      result.current.start();
    });

    expect(result.current.countdown).toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.countdown).toBeFalsy();
  });

  it('should stop timer when stop is called', () => {
    const { result } = renderHook(() => useTimer({ countdown: 1 }));

    act(() => {
      result.current.start();
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.seconds).toBe('01');

    act(() => result.current.stop());

    expect(result.current.isFinished).toBeTruthy();
  });

  it('should default countdown to 59 if its greater than 59', () => {
    const { result } = renderHook(() => useTimer({ countdown: 60 }));

    expect(result.current.seconds).toBe('59');
  });

  it('should resume timer', () => {
    const { result } = renderHook(() => useTimer({ countdown: 1 }));

    act(() => {
      result.current.start();
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.seconds).toBe('01');

    act(() => result.current.stop());

    expect(result.current.isFinished).toBeTruthy();

    act(() => {
      result.current.resume();
    });

    expect(result.current.isRunning).toBe(true);
  });
});
