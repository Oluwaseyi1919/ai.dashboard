export default function Sales() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Sales Automation</h2>
      <div className="mt-4 p-6 bg-white rounded-2xl border">
        <p className="text-sm text-slate-600">Generate outreach, upload CSVs, or connect CRMs. Preview and send from your connected inbox.</p>
        <div className="mt-4 grid lg:grid-cols-2 gap-4">
          <textarea className="p-3 border rounded-lg h-40" placeholder="Describe your offer and target..." />
          <div>
            <label className="text-sm">Tone</label>
            <select className="w-full p-3 border rounded-lg mt-2"><option>Friendly</option><option>Professional</option></select>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Generate Email (mock)</button>
              <button className="px-4 py-2 rounded-lg bg-white border">Upload CSV (mock)</button>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 border rounded-xl bg-gray-50">
          <div className="font-semibold text-slate-700 mb-2">Connect Email (mock)</div>
          <div className="flex gap-2 flex-wrap">
            <button className="px-3 py-2 rounded-lg bg-white border">Sign in with Gmail</button>
            <button className="px-3 py-2 rounded-lg bg-white border">Sign in with Outlook</button>
            <button className="px-3 py-2 rounded-lg bg-white border">Sign in with Yahoo</button>
          </div>
          <div className="text-xs text-slate-500 mt-2">Sends are rate-limited and scheduled automatically to avoid spam (mock).</div>
        </div>
      </div>
    </section>
  );
}
