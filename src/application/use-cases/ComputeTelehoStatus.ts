import { DateTime } from "luxon";
import { TELEHOUDAI, type TelehoSession } from "../../domain/entities/TelehoSession";
import type { TelehoStatus } from "../../domain/value-objects/TelehoStatus";
import type { TimeRemaining } from "../../domain/value-objects/TimeRemaining";

export interface TelehoStatusResult {
  readonly status: TelehoStatus;
  readonly timeRemaining: TimeRemaining | null;
  readonly nextOpenAtJST: DateTime | null;
}

export const computeTelehoStatus = (
  now: DateTime,
  session: TelehoSession = TELEHOUDAI,
): TelehoStatusResult => {
  const jst = now.setZone("Asia/Tokyo");
  const hour = jst.hour;

  if (hour >= session.openHour || hour < session.closeHour) {
    return { status: "open", timeRemaining: null, nextOpenAtJST: null };
  }

  const nextOpen = jst.set({ hour: session.openHour, minute: 0, second: 0, millisecond: 0 });
  const diffMs = nextOpen.toMillis() - jst.toMillis();

  return {
    status: "countdown",
    timeRemaining: {
      hours: Math.floor(diffMs / (1000 * 60 * 60)),
      minutes: Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diffMs % (1000 * 60)) / 1000),
    },
    nextOpenAtJST: nextOpen,
  };
};
