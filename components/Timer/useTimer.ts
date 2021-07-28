import { useCallback, useEffect, useRef, useState } from 'react';

interface UseTimerData {
  deciseconds: string;
  seconds: string;
  minutes: string;
  hours: string;
  start: () => void;
  stop: () => void;
  isRunning: boolean;
  startedAt?: number;
  countdown: boolean;
}

interface UseTimerProps {
  countdown?: number;
}

function useTimer({ countdown: cd = 0 }: UseTimerProps): UseTimerData {
  const [deciseconds, setDeciseconds] = useState('0');
  const [seconds, setSeconds] = useState(() => {
    // TODO break countdown to minutes if necessary
    if (cd >= 60) return '59';
    if (cd > 0) return cd.toString();

    return '00';
  });
  const [minutes, setMinutes] = useState('00');
  const [hours, setHours] = useState('0');

  const [startedAt, setStartedAt] = useState<number | undefined>();
  const [isRunning, setIsRunning] = useState(false);
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
    setIsRunning(false);
  }, []);

  const animate = useCallback(() => {
    if (isRunningRef.current && startedAt) {
      const deltaTime = Date.now() - (startedAt + cd * 1000);

      const negative = deltaTime < 0;

      let timer = Math.abs(deltaTime);

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
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  return {
    deciseconds,
    seconds,
    minutes,
    hours,
    start,
    stop,
    isRunning,
    startedAt,
    countdown,
  };
}

export default useTimer;
