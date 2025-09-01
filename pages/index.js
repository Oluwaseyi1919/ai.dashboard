import { useEffect, useState } from "react";
import AccessKeyScreen from "@/components/AccessKeyScreen";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="h-screen w-screen">
      {showSplash ? (
        <Splash />
      ) : authed ? (
        <Dashboard onLogout={() => setAuthed(false)} />
      ) : (
        <AccessKeyScreen onSuccess={() => setAuthed(true)} />
      )}
    </div>
  );
}

function Splash() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-[var(--bg-gradient)]">
      <div className="text-center text-white animate-fadeIn">
        <div className="text-4xl font-extrabold drop-shadow">Welcome to AI 360°</div>
        <div className="text-sm mt-2 opacity-90">Loading your workspace…</div>
      </div>
    </div>
  );
}
