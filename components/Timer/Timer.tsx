import { Button } from '@/components';
import useTimer from './useTimer';

import { ControllersContainer, TimerContainer } from './styles';

const Timer = (): JSX.Element => {
  const {
    seconds,
    minutes,
    hours,
    deciseconds,
    isRunning,
    start,
    stop,
    startedAt,
    countdown,
  } = useTimer({ countdown: 15 });

  return (
    <ControllersContainer>
      <TimerContainer>
        {countdown && '-'}
        {hours}:{minutes}:{seconds}.<small>{deciseconds}</small>
      </TimerContainer>
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

export default Timer;
