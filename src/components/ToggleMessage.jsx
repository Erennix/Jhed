import { useState } from "react";

export default function ToggleMessage({
  label = "Open note",
  openLabel = "Close note",
  special = false,
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="toggle-wrap">
      <button
        className={`toggle-button${special ? " special-button" : ""}`.trim()}
        type="button"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? openLabel : label}
      </button>
      {open ? <div className={`toggle-copy${special ? " special-copy" : ""}`.trim()}>{children}</div> : null}
    </div>
  );
}
