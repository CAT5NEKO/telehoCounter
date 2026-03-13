import { Win95WindowControls } from "./Win95WindowControls";

interface Win95TitleBarProps {
  title: string;
  icon?: string;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
}

export const Win95TitleBar = ({
  title,
  icon = "☎",
  onMinimize,
  onMaximize,
  onClose,
}: Win95TitleBarProps) => (
  <div className="win95-titlebar">
    <div className="flex items-center gap-1 min-w-0">
      <span className="text-[13px] leading-none select-none">{icon}</span>
      <span className="win95-titlebar-text truncate">{title}</span>
    </div>
    <Win95WindowControls onMinimize={onMinimize} onMaximize={onMaximize} onClose={onClose} />
  </div>
);
