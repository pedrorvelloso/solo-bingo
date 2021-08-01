import { Button, Timer } from '@/components';
import { ControllersContainer } from './styles';
import useTimer from './useTimer';

const TimerStatus = () => {
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
  } = useTimer({ countdown: 15 });

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
    </ControllersContainer>
  );
};

export default TimerStatus;
