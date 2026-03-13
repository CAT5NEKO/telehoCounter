import { useTelehoTimer } from "../../hooks/useTelehoTimer";
import { useLocale } from "../../hooks/useLocale";
import { TimeDisplay } from "./TimeDisplay";

export const TelehoCounter = () => {
  const { status, timeRemaining } = useTelehoTimer();
  const { locale, timezone } = useLocale();

  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="text-[11px] text-center font-bold">☎ テレホーダイ カウンター ☎</div>
      <TimeDisplay
        status={status}
        timeRemaining={timeRemaining}
        locale={locale}
        timezone={timezone}
      />
      <div className="win95-statusbar text-[11px]">23:00–8:00 JST</div>
    </div>
  );
};
