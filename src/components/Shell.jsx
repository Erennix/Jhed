import SnowLayer from "./SnowLayer";
import TopBar from "./TopBar";

export default function Shell({ children, denseSnow = false, special = false }) {
  return (
    <div className={`page-shell${special ? " special-shell" : ""}`.trim()}>
      <SnowLayer dense={denseSnow} />
      <div className="aurora aurora-one"></div>
      <div className="aurora aurora-two"></div>
      <TopBar />
      {children}
    </div>
  );
}
