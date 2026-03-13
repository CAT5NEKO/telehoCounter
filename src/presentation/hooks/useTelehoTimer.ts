import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import {
  computeTelehoStatus,
  type TelehoStatusResult,
} from "../../application/use-cases/ComputeTelehoStatus";

export const useTelehoTimer = (): TelehoStatusResult => {
  const [result, setResult] = useState<TelehoStatusResult>(() =>
    computeTelehoStatus(DateTime.now()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setResult(computeTelehoStatus(DateTime.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return result;
};
