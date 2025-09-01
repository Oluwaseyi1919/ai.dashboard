import { Users, Mic, FileText, Mail, Bot, Sparkles, LayoutDashboard } from "lucide-react";

const items = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "client-intel", icon: Users, label: "Client Intel" },
  { id: "meeting-memory", icon: Mic, label: "Meeting Memory" },
  { id: "contracts", icon: FileText, label: "Contract Analyzer" },
  { id: "sales", icon: Mail, label: "Sales Automation" },
  { id: "chatbot", icon: Bot, label: "Chatbot Builder" },
  { id: "voice", icon: Sparkles, label: "Voice Assistant" },
];

export default function Sidebar({ active, setActive }) {
  return (
    <aside className="w-72 bg-white border-r p-6 flex flex-col">
      <nav className="flex-1 space-y-2">
        {items.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`w-full text-left px-3 py-3 rounded-lg flex items-center gap-3 ${active === id ? "bg-slate-900 text-white" : "hover:bg-slate-50 text-slate-700"}`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-6 text-xs text-slate-500 border-t pt-4">
        <div className="font-semibold text-slate-700">AI-Powered Tools</div>
        <div>Supercharge your sales process</div>
      </div>
    </aside>
  );
}
