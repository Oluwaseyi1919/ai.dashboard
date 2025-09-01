import { useState } from "react";
import { Upload, Send, X } from "lucide-react";

export default function MeetingMemory() {
  const [mode, setMode] = useState("upload"); // 'upload' | 'paste'
  const [fileName, setFileName] = useState("");
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState(null);
  const [showSend, setShowSend] = useState(false);
  const [recipients, setRecipients] = useState("");

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (f) setFileName(f.name);
  };

  const summarize = () => {
    const source = mode === "paste" ? notes : (fileName ? `Transcript from ${fileName}: discussed pricing, timeline, next steps.` : "");
    const bullets = (source || "").split(/\.|\n/).map(s => s.trim()).filter(Boolean).slice(0, 6);
    const actions = bullets.slice(0, 3).map((b, i) => ({ text: b, priority: i === 0 ? "High" : i === 1 ? "Medium" : "Low" }));
    const decisions = bullets.slice(3, 6);
    const subject = `Follow-up: ${actions[0]?.text?.slice(0, 40) || "Next steps"}`;
    const email = `Hi team,\n\nThanks for the discussion. Agreed actions:\n${actions.map(a => `- ${a.text} (${a.priority})`).join("\n")}\n\nBest,\nYou`;
    setSummary({ subject, actions, decisions, email });
  };

  const send = () => {
    alert(`(Mock) Sending follow-up to: ${recipients || "(no recipient)"}`);
    setShowSend(false);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold">Meeting Memory</h2>
          <p className="text-sm text-slate-600 mt-1">
            Upload a Zoom/Meet recording (video/audio) or paste notes. Get ranked action items, decisions and a ready follow-up email.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border">
          <div className="flex gap-2">
            <button onClick={() => setMode("upload")} className={`px-3 py-2 rounded-lg ${mode === "upload" ? "bg-slate-900 text-white" : "bg-white border"}`}>Upload Recording</button>
            <button onClick={() => setMode("paste")} className={`px-3 py-2 rounded-lg ${mode === "paste" ? "bg-slate-900 text-white" : "bg-white border"}`}>Paste Notes</button>
          </div>

          {mode === "upload" ? (
            <div className="mt-4">
              <label className="text-sm text-slate-600">Upload file (mp4, mp3, wav) or drag & drop</label>
              <label className="flex items-center gap-3 p-3 border border-dashed rounded-lg mt-2 cursor-pointer bg-gray-50">
                <Upload className="w-5 h-5" /> <span className="text-sm">{fileName || "Choose file"}</span>
                <input type="file" className="hidden" onChange={onFile} />
              </label>
              <div className="mt-2 text-xs text-slate-500">Drag and drop support is enabled by clicking above (mock).</div>
              <div className="mt-4">
                <button className="px-4 py-2 rounded-lg bg-white border">Transcribe (mock)</button>
                <div className="text-xs text-slate-500 mt-2">
                  Or: <span className="font-medium">Summarize what you want to say</span> and add to the already generated email by giving a voice command (via Voice Assistant).
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <label className="text-sm text-slate-600">Paste transcript or notes</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full mt-2 p-3 border rounded-lg h-40" placeholder="e.g. discussed pricing, timeline, owners..." />
            </div>
          )}

          <div className="mt-4 flex gap-2">
            <button onClick={summarize} className="px-4 py-2 rounded-lg bg-slate-900 text-white">Summarize Meeting</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border min-h-[260px]">
          {!summary ? (
            <div className="text-sm text-slate-500">Action items, decisions and the follow-up email will appear here after you summarize.</div>
          ) : (
            <div className="space-y-4">
              <div>
                <div className="text-slate-600 font-semibold">Action Items (ranked)</div>
                <ul className="mt-2 space-y-2">
                  {summary.actions.map((a, i) => (
                    <li key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm">{a.text}</div>
                      <div className="text-xs px-2 py-1 rounded-full bg-white border text-slate-700">{a.priority}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-slate-600 font-semibold">Decisions</div>
                <ul className="list-disc ml-5 mt-2 text-sm">
                  {summary.decisions.map((d, i) => (<li key={i}>{d}</li>))}
                </ul>
              </div>

              <div>
                <div className="text-slate-600 font-semibold">Follow-up Email</div>
                <div className="mt-2 text-sm whitespace-pre-wrap bg-gray-50 p-3 rounded-lg border">Subject: {summary.subject}{"\n\n"}{summary.email}</div>
                <div className="mt-3 flex gap-2">
                  <button onClick={() => setShowSend(true)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white flex items-center gap-2"><Send className="w-4 h-4" /> Send to Client</button>
                  <button onClick={() => navigator.clipboard.writeText(summary.email)} className="px-4 py-2 rounded-lg bg-white border">Copy</button>
                </div>

                {showSend && (
                  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-lg font-semibold">Send Follow-up Email</div>
                        <button onClick={() => setShowSend(false)} className="text-slate-500"><X /></button>
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm text-slate-600">Recipient email(s)</label>
                        <input value={recipients} onChange={(e) => setRecipients(e.target.value)} placeholder="client@company.com, team@you.com" className="w-full p-3 border rounded-lg" />
                        <div className="text-xs text-slate-500">Emails will be sent from your connected inbox in Sales Automation (mock).</div>
                        <div className="flex gap-2 mt-3">
                          <button onClick={send} className="px-4 py-2 rounded-lg bg-slate-900 text-white">Send (mock)</button>
                          <button onClick={() => { navigator.clipboard.writeText(summary.email); setShowSend(false); }} className="px-4 py-2 rounded-lg bg-white border">Copy & Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
