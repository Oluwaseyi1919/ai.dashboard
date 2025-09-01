import { useState } from "react";

export default function ClientIntel() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const run = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const host = input.replace(/^https?:\/\//, "").replace(/\/.*$/, "") || "their market";
      setResult({
        pains: [`Lead-gen inefficiencies at ${host}`, "High CAC from fragmented tools", "Weak sales->CS handoff"],
        persona: "Direct, data-driven communicator. Short social posts with occasional long-form analysis. Responds well to concise ROI-driven outreach.",
        scripts: [
          `Quick opener: Hi — I noticed ${host} is focused on pipeline efficiency. We reduced first-call time by 40% for a similar team — 10-min call?`,
          "Social: Loved your post about retention — I pulled 3 signals from your site that show quick wins. Want the list?",
          "Case: We helped X cut discovery time by 30%. If I send a 60s clip showing how, would you watch?",
        ],
      });
      setLoading(false);
    }, 700);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold">Client Intel</h2>
          <p className="text-sm text-slate-600 mt-1">
            Paste a LinkedIn profile or company website and get a tailored dossier: pain points, personality, and outreach scripts.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border">
          <label className="text-sm text-slate-600">LinkedIn profile or company website</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="https://linkedin.com/in/... or https://company.com"
            className="w-full mt-3 p-3 border rounded-lg"
          />

          <div className="mt-4 flex gap-2">
            <button
              onClick={run}
              className={`px-4 py-2 rounded-lg ${loading ? "bg-slate-300 text-slate-500" : "bg-slate-900 text-white"}`}
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Generate Dossier"}
            </button>
            <button onClick={() => { setInput(""); setResult(null); }} className="px-4 py-2 rounded-lg bg-white border">
              Clear
            </button>
          </div>

          <div className="mt-4 text-xs text-slate-500">Tip: paste the LinkedIn public URL or the company homepage for best results.</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border min-h-[220px]">
          {!result ? (
            <div className="text-sm text-slate-500">Results will appear here: pain points, persona, and 3 outreach scripts.</div>
          ) : (
            <div className="space-y-4">
              <div>
                <div className="text-slate-600 text-sm font-semibold">Top Pain Points</div>
                <ul className="list-disc ml-5 mt-2 text-sm">
                  {result.pains.map((p, i) => (<li key={i}>{p}</li>))}
                </ul>
              </div>

              <div>
                <div className="text-slate-600 text-sm font-semibold">Personality Breakdown</div>
                <div className="mt-2 text-sm">{result.persona}</div>
              </div>

              <div>
                <div className="text-slate-600 text-sm font-semibold">Suggested Outreach Scripts</div>
                <div className="mt-2 space-y-2">
                  {result.scripts.map((s, i) => (<div key={i} className="p-3 border rounded-lg text-sm bg-gray-50">{s}</div>))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
