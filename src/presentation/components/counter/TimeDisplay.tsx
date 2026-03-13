import type { TimeRemaining } from "../../../domain/value-objects/TimeRemaining";
import type { TelehoStatus } from "../../../domain/value-objects/TelehoStatus";
import { formatTimeRemaining } from "../../formatters/timeFormatter";

interface TimeDisplayProps {
  status: TelehoStatus;
  timeRemaining: TimeRemaining | null;
  locale: string;
  timezone: string;
}

const OPEN_LABELS: Record<string, string> = {
  ja: "テレホタイム実施中！",
  ko: "텔레호 타임 진행 중!",
  zh: "通话时间进行中！",
  en: "Telehoudai is Open!",
  de: "Telehoudai ist offen!",
  fr: "Telehoudai est ouvert !",
  es: "¡Telehoudai está abierto!",
  pt: "Telehoudai está aberto!",
  ru: "Телехо время активно!",
};

const COUNTDOWN_LABELS: Record<string, string> = {
  ja: "テレホタイムまであと",
  ko: "텔레호 타임까지",
  zh: "距离通话时间还有",
  en: "Time until Telehoudai:",
  de: "Zeit bis Telehoudai:",
  fr: "Temps avant Telehoudai :",
  es: "Tiempo hasta Telehoudai:",
  pt: "Tempo até Telehoudai:",
  ru: "До начала Телехо:",
};

export const TimeDisplay = ({ status, timeRemaining, locale, timezone }: TimeDisplayProps) => {
  const lang = locale.split("-")[0].toLowerCase();

  if (status === "open") {
    return (
      <div className="win95-panel p-4 text-center">
        <div className="text-[24px] font-bold text-[#000080] mb-2">
          {OPEN_LABELS[lang] ?? OPEN_LABELS.en}
        </div>
        <div className="text-[11px] text-win95-dark">{timezone}</div>
      </div>
    );
  }

  return (
    <div className="win95-panel p-4">
      <div className="text-[11px] mb-2 text-center">
        {COUNTDOWN_LABELS[lang] ?? COUNTDOWN_LABELS.en}
      </div>
      <div className="win95-display text-center font-mono text-[36px] tracking-wider">
        {timeRemaining ? formatTimeRemaining(timeRemaining, locale) : "--:--:--"}
      </div>
      <div className="text-[11px] text-win95-dark text-center mt-2">{timezone}</div>
    </div>
  );
};
