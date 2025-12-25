import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function AdminReviews() {
  const [adminKey] = useState(() => window.prompt("Enter admin key") || "");
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  async function load() {
    try {
      setError("");
      const res = await axios.get(`${API}/api/reviews/admin/all`, {
        headers: { "x-admin-key": adminKey },
      });
      setReviews(res.data);
    } catch (e) {
      setError(e?.response?.data?.message || e.message);
    }
  }

  async function approve(id) {
    try {
      await axios.patch(
        `${API}/api/reviews/${id}/approve`,
        {},
        { headers: { "x-admin-key": adminKey } }
      );
      load();
    } catch (e) {
      alert(e?.response?.data?.message || e.message);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-extrabold text-gray-900">
        Admin — Review Approval
      </h1>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
          {error}
        </div>
      )}

      <div className="mt-6 space-y-4">
        {reviews.map((r) => (
          <div key={r._id} className="rounded-2xl border border-gray-200 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-bold text-gray-900">{r.name}</div>
                <div className="text-sm text-gray-600">
                  {r.service} • {r.rating}/5
                </div>
                <p className="mt-3 text-gray-700">{r.message}</p>
                <div className="mt-3 text-xs text-gray-500">
                  {r.approved ? "Approved ✅" : "Pending ⏳"}
                </div>
              </div>

              {!r.approved && (
                <button
                  onClick={() => approve(r._id)}
                  className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700"
                >
                  Approve
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
