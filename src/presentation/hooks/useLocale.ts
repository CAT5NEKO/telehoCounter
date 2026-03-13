import { useMemo } from "react";
import { BrowserLocaleRepository } from "../../infrastructure/repositories/BrowserLocaleRepository";

const repo = new BrowserLocaleRepository();

export const useLocale = () => {
  return useMemo(
    () => ({
      locale: repo.getLocale(),
      timezone: repo.getTimezone(),
    }),
    [],
  );
};
