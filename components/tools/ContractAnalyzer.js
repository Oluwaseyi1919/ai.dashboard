export default function Contracts() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Contract Analyzer</h2>

      <div className="mt-2 p-6 bg-white rounded-2xl border">
        <p className="text-sm text-slate-600">
          Paste or upload contracts to flag risky terms and missing clauses. Use generators for proposals, invoices and receipts.
        </p>
        <div className="mt-4 flex gap-2">
          <label className="flex items-center gap-3 p-3 border border-dashed rounded-lg bg-gray-50 cursor-pointer">
            <span className="text-sm">Upload file<input type="file" className="hidden" /></span>
          </label>
        </div>
      </div>

      <div className="p-6 bg-white rounded-2xl border">
        <div className="text-sm text-slate-700 font-semibold mb-2">Generate Proposal</div>
        <p className="text-xs text-slate-500 mb-3">
          Write down what you want the proposal to entail, the names of the two participating entities, timelines and all details so the tool can generate a proposal/contract that benefits and protects both parties.
        </p>
        <textarea className="w-full p-3 border rounded-lg h-40" placeholder="Describe scope, parties, timelines, deliverables, payment terms..." />
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Generate (mock)</button>
          <button className="px-4 py-2 rounded-lg bg-white border">Download as PDF (mock)</button>
          <button className="px-4 py-2 rounded-lg bg-white border">Download as Word (mock)</button>
        </div>
        <div className="text-xs text-slate-500 mt-2">A signature block will be included for both parties (mock).</div>
      </div>
    </section>
  );
}
