import { Button, Timer } from '@/components';
import useTimer from '@/hooks/useTimer';
import { useEffect } from 'react';

import { ControllersContainer } from './styles';

type TimerStatusProps = {
  countdown: number;
  onCountdownEnd?: () => void;
};

const TimerStatus = ({ countdown: cd, onCountdownEnd }: TimerStatusProps) => {
  const {
    seconds,
    minutes,
    hours,
    deciseconds,
    isRunning,
    isFinished,
    start,
    stop,
    startedAt,
    countdown,
    resume,
    isResumed,
  } = useTimer({ countdown: cd });

  useEffect(() => {
    if (!countdown && !isResumed && isRunning && onCountdownEnd)
      onCountdownEnd();
  }, [countdown, isResumed, isRunning, onCountdownEnd]);

  return (
    <ControllersContainer>
      <Timer
        isFinished={isFinished}
        countdown={countdown}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        deciseconds={deciseconds}
      />
      {!isRunning && !startedAt && (
        <Button onClick={start} color="success">
          Start
        </Button>
      )}
      {isRunning && (
        <>
          <Button onClick={stop} disabled={countdown}>
            Done
          </Button>
          <Button onClick={stop} color="danger" ml="14px" disabled={countdown}>
            Forfeit
          </Button>
        </>
      )}
      {isFinished && (
        <>
          <Button color="warn" onClick={resume}>
            Resume
          </Button>
          <Button color="success" ml="14px">
            Submit
          </Button>
        </>
      )}
    </ControllersContainer>
  );
};

export default TimerStatus;
