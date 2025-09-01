import { useEffect, useState } from "react";

const ACCESS_CODE = "777111";
const STORAGE_KEY = "ai360_access_key_saved";
const STORAGE_VALUE = "true";
const STORAGE_LAST_KEY = "ai360_last_key";

export default function AccessKeyScreen({ onSuccess }) {
  const [key, setKey] = useState("");
  const [remember, setRemember] = useState(false);
  const [prefilled, setPrefilled] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) === STORAGE_VALUE;
      const last = localStorage.getItem(STORAGE_LAST_KEY) || "";
      if (saved && last) {
        setKey(last);
        setPrefilled(true); // still shows the screen, but prefilled
      }
    } catch {}
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (key.trim() === ACCESS_CODE) {
      try {
        localStorage.setItem(STORAGE_LAST_KEY, key.trim());
        if (remember) {
          localStorage.setItem(STORAGE_KEY, STORAGE_VALUE);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch {}
      onSuccess();
    } else {
      alert("Invalid access key. Please try again.");
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-[var(--bg-gradient)] p-6">
      <div className="card w-full max-w-md p-8 animate-rise">
        <div className="text-center">
          <div className="text-3xl font-extrabold text-slate-800">Welcome to <span className="text-brand-600">AI 360°</span></div>
          <p className="text-slate-500 mt-2">Enter your access key to continue</p>
        </div>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-slate-600">Access Key</label>
            <input
              type="password"
              className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600"
              placeholder="Enter the 6-digit key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
            {prefilled && (
              <div className="text-xs text-slate-500 mt-1">
                Prefilled from this device. Click <b>Submit</b> to continue.
              </div>
            )}
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember this device
          </label>

          <button
            className="w-full py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold"
            type="submit"
          >
            Submit
          </button>
        </form>

        <div className="text-xs text-slate-500 mt-4">
          Tip: this key is device-specific when “Remember this device” is checked.
        </div>
      </div>
    </div>
  );
}
