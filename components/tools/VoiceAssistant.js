export default function VoiceAssistant() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Voice Assistant</h2>
      <div className="mt-4 p-6 bg-white rounded-2xl border space-y-4">
        <p className="text-sm text-slate-600">
          Use voice commands to draft replies, summarize, search Google, or book meetings. Confirm before sending. (Mock UI)
        </p>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="p-4 border rounded-xl bg-gray-50">
            <div className="font-semibold text-slate-700 mb-2">Sign in to Email (mock)</div>
            <div className="flex gap-2 flex-wrap">
              <button className="px-3 py-2 rounded-lg bg-white border">Use Sales Automation Email</button>
              <button className="px-3 py-2 rounded-lg bg-white border">Sign in with Gmail</button>
              <button className="px-3 py-2 rounded-lg bg-white border">Sign in with Outlook</button>
            </div>
            <div className="text-xs text-slate-500 mt-2">Reply and send individual emails using voice commands (mock).</div>
          </div>

          <div className="p-4 border rounded-xl bg-gray-50">
            <div className="font-semibold text-slate-700 mb-2">Sign in to Calendar (mock)</div>
            <div className="flex gap-2 flex-wrap">
              <button className="px-3 py-2 rounded-lg bg-white border">Google Calendar</button>
              <button className="px-3 py-2 rounded-lg bg-white border">Outlook Calendar</button>
              <button className="px-3 py-2 rounded-lg bg-white border">Zoom</button>
              <button className="px-3 py-2 rounded-lg bg-white border">Google Meet</button>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-xl bg-gray-50">
          <div className="font-semibold text-slate-700 mb-2">Use your Voice Assistant</div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg bg-rose-600 text-white">Start Listening •</button>
            <div className="text-xs text-slate-600">
              try: “Summarize the last meeting and email Jane.” “Book a demo on Friday at 2pm.” “Search Google for ACV benchmarks.” <b>(Works in-app and for outside tasks — mock)</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
