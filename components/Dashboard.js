import { useState } from "react";
import Sidebar from "./Sidebar";
import ClientIntel from "./tools/ClientIntel";
import MeetingMemory from "./tools/MeetingMemory";
import Contracts from "./tools/ContractAnalyzer";
import Sales from "./tools/SalesAutomation";
import Chatbot from "./tools/ChatbotBuilder";
import VoiceAssistant from "./tools/VoiceAssistant";

export default function Dashboard({ onLogout }) {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">AI</div>
          <div>
            <div className="text-lg font-extrabold">AI 360°</div>
            <div className="text-xs text-slate-500">Your Sales, Legal & Client Assistant</div>
          </div>
        </div>

        {/* Only Logout in header */}
        <div>
          <button onClick={onLogout} className="text-sm px-3 py-2 rounded-lg bg-white border">Logout</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar active={active} setActive={setActive} />

        {/* Main */}
        <main className="flex-1 p-8 overflow-auto">
          {active === "dashboard" && <TopDashboard />}
          {active === "client-intel" && <ClientIntel />}
          {active === "meeting-memory" && <MeetingMemory />}
          {active === "contracts" && <Contracts />}
          {active === "sales" && <Sales />}
          {active === "chatbot" && <Chatbot />}
          {active === "voice" && <VoiceAssistant />}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t p-4 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>© {new Date().getFullYear()} AI 360°. All rights reserved.</div>
          <div className="text-right">
            <div className="font-semibold">AI-Powered Tools</div>
            <div className="text-[13px] text-slate-500">Supercharge your sales process</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ label, value, sub }) {
  return (
    <div className="card p-5">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      <div className="text-xs text-slate-400 mt-1">{sub}</div>
    </div>
  );
}

function TopDashboard() {
  return (
    <section className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Recent Clients" value="18" sub="last 30 days" />
        <StatCard label="Meetings Analyzed" value="42" sub="auto-summarized" />
        <StatCard label="Contracts Reviewed" value="11" sub="risk flagged" />
        <StatCard label="Email Sent" value="1,204" sub="via automation" />
      </div>
    </section>
  );
}
