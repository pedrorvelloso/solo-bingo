import { useCallback, useEffect, useRef, useState } from 'react';

interface UseTimerData {
  count: number;
  deciseconds: string;
  seconds: string;
  minutes: string;
  hours: string;
  start: () => void;
  stop: () => void;
  resume: () => void;
  isRunning: boolean;
  isFinished: boolean;
  startedAt?: number;
  countdown: boolean;
}

interface UseTimerProps {
  countdown?: number;
}

function useTimer({ countdown: cd = 0 }: UseTimerProps): UseTimerData {
  const [count, setCount] = useState(0);
  const [deciseconds, setDeciseconds] = useState('0');
  const [seconds, setSeconds] = useState(() => {
    // TODO break countdown to minutes if necessary
    if (cd >= 60) return '59';
    if (cd > 0) return `00${cd}`.slice(-2);

    return '00';
  });
  const [minutes, setMinutes] = useState('00');
  const [hours, setHours] = useState('0');

  const [startedAt, setStartedAt] = useState<number | undefined>();
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [countdown, setCountdown] = useState(() => {
    if (cd > 0) return true;
    return false;
  });

  const requestRef = useRef<number>(0);
  const isRunningRef = useRef(false);

  const start = useCallback(() => {
    setStartedAt(new Date().getTime());
    isRunningRef.current = true;
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    isRunningRef.current = false;
    setIsFinished(true);
    setIsRunning(false);
  }, []);

  const resume = useCallback(() => {
    isRunningRef.current = true;
    setIsFinished(false);
    setIsRunning(true);
  }, []);

  const animate = useCallback(() => {
    if (isRunningRef.current && startedAt) {
      const deltaTime = Date.now() - (startedAt + cd * 1000);

      const negative = deltaTime < 0;

      let timer = Math.abs(deltaTime);

      setCount(timer);

      setCountdown(negative);

      const hrs = (timer - (timer % 3600000)) / 3600000;
      setHours(hrs.toString());
      timer -= hrs * 3600000;
      const mins = (timer - (timer % 60000)) / 60000;
      setMinutes(`00${mins}`.slice(-2));
      timer -= mins * 60000;
      const secs = (timer - (timer % 1000)) / 1000;
      setSeconds(`00${secs}`.slice(-2));
      timer -= secs * 1000;
      const ds = (timer - (timer % 100)) / 100;
      setDeciseconds(ds.toString());

      requestRef.current = requestAnimationFrame(animate);
    }
  }, [cd, startedAt]);

  useEffect(() => {
    if (isRunning) requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate, isRunning]);

  return {
    count,
    deciseconds,
    seconds,
    minutes,
    hours,
    start,
    stop,
    resume,
    isRunning,
    startedAt,
    countdown,
    isFinished,
  };
}

export default useTimer;
