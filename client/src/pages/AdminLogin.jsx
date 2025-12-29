import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAdminKey } from "../utils/adminAuth";

export default function AdminLogin() {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    setError("");

    if (!key.trim()) {
      setError("Please enter your admin key.");
      return;
    }

    setAdminKey(key.trim());
    navigate("/admin");
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-extrabold text-gray-900">Admin Login</h1>
          <p className="mt-2 text-gray-600">
            Enter the admin key to manage and approve reviews.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Admin Key
              </label>
              <input
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Enter admin key"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-bold text-white hover:bg-emerald-700"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500">
            Tip: The key is stored only in this browser session.
          </p>
        </div>
      </div>
    </div>
  );
}
