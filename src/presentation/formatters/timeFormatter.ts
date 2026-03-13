import type { TimeRemaining } from "../../domain/value-objects/TimeRemaining";

interface TimeUnits {
  hours: string;
  minutes: string;
  seconds: string;
}

const UNIT_LABELS: Record<string, TimeUnits> = {
  ja: { hours: "時間", minutes: "分", seconds: "秒" },
  ko: { hours: "시간", minutes: "분", seconds: "초" },
  zh: { hours: "小时", minutes: "分钟", seconds: "秒" },
  de: { hours: "Std", minutes: "Min", seconds: "Sek" },
  fr: { hours: "h", minutes: "min", seconds: "s" },
  es: { hours: "h", minutes: "min", seconds: "s" },
  pt: { hours: "h", minutes: "min", seconds: "s" },
  ru: { hours: "ч", minutes: "мин", seconds: "с" },
  en: { hours: "h", minutes: "m", seconds: "s" },
};

const pad = (n: number): string => String(n).padStart(2, "0");

export const formatTimeRemaining = (tr: TimeRemaining, locale: string): string => {
  const lang = locale.split("-")[0].toLowerCase();
  const units = UNIT_LABELS[lang] ?? UNIT_LABELS.en;
  return `${tr.hours}${units.hours} ${pad(tr.minutes)}${units.minutes} ${pad(tr.seconds)}${units.seconds}`;
};
