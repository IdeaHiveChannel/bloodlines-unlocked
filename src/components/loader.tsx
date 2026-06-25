import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("dms-seen") === "1") { setVisible(false); return; }
    const t = setTimeout(() => { setVisible(false); sessionStorage.setItem("dms-seen", "1"); }, 2200);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050B16] transition-opacity duration-700"
      style={{ animation: "fadeOut 0.6s ease 1.6s forwards" }}>
      <svg viewBox="0 0 1200 200" className="w-[70vw] max-w-3xl vessel-glow">
        <path
          d="M0,100 L300,100 L340,100 L360,40 L380,160 L400,60 L420,140 L440,100 L900,100 L1200,100"
          fill="none" stroke="var(--accent)" strokeWidth="1.5"
          strokeDasharray="1200" strokeDashoffset="1200"
          style={{ animation: "ecg 1.8s cubic-bezier(0.16,1,0.3,1) forwards" }}
        />
      </svg>
      <style>{`@keyframes fadeOut { to { opacity: 0; visibility: hidden; } }`}</style>
    </div>
  );
}
