import { TimerContainer } from './styles';

type TimerProps = {
  isFinished: boolean;
  countdown: boolean;
  hours: string;
  minutes: string;
  seconds: string;
  deciseconds: string;
};

const Timer = ({
  isFinished,
  countdown,
  hours,
  minutes,
  seconds,
  deciseconds,
}: TimerProps) => {
  return (
    <TimerContainer finshed={isFinished}>
      {countdown && '-'}
      {hours}:{minutes}:{seconds}.<small>{deciseconds}</small>
    </TimerContainer>
  );
};

export default Timer;
