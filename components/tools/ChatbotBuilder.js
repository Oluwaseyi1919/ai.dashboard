export default function Chatbot() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Chatbot Builder</h2>
      <div className="mt-4 p-6 bg-white rounded-2xl border">
        <p className="text-sm text-slate-600">Create an embeddable chatbot that answers from your site, offers live chat, and books appointments via Calendly.</p>
        <div className="mt-4 grid lg:grid-cols-2 gap-4">
          <input className="p-3 border rounded-lg" placeholder="https://yourdomain.com" />
          <input className="p-3 border rounded-lg" placeholder="Calendly link (optional)" />
        </div>
        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Train & Generate (mock)</button>
          <button className="px-4 py-2 rounded-lg bg-white border">Preview Widget (mock)</button>
        </div>
      </div>
    </section>
  );
}
