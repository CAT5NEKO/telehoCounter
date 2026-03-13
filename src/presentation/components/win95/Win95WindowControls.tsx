interface Win95WindowControlsProps {
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
}

export const Win95WindowControls = ({
  onMinimize,
  onMaximize,
  onClose,
}: Win95WindowControlsProps) => (
  <div className="flex items-center gap-0.5 ml-0.5">
    <button className="win95-ctrl-btn" onClick={onMinimize} aria-label="最小化">
      <span className="win95-ctrl-minimize" />
    </button>
    <button className="win95-ctrl-btn" onClick={onMaximize} aria-label="最大化">
      <span className="win95-ctrl-maximize" />
    </button>
    <button className="win95-ctrl-btn win95-ctrl-close" onClick={onClose} aria-label="閉じる">
      ×
    </button>
  </div>
);
