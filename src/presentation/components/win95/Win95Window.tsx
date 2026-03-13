import { type ReactNode } from "react";
import { Win95TitleBar } from "./Win95TitleBar";

interface Win95WindowProps {
  title: string;
  icon?: string;
  children: ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export const Win95Window = ({
  title,
  icon,
  children,
  onClose,
  onMinimize,
  onMaximize,
}: Win95WindowProps) => (
  <div className="win95-window" role="dialog" aria-label={title}>
    <Win95TitleBar
      title={title}
      icon={icon}
      onClose={onClose}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
    />
    <div className="win95-content">{children}</div>
  </div>
);
