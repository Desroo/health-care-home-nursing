import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAdminKey, clearAdminKey } from "../utils/adminAuth";

const API = import.meta.env.VITE_API_URL;

export default function AdminReviews() {
  const navigate = useNavigate();
  const [adminKey, setAdminKeyState] = useState("");
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function load(key) {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get(`${API}/api/reviews/admin/all`, {
        headers: { "x-admin-key": key },
      });
      setReviews(res.data);
    } catch (e) {
      const msg = e?.response?.data?.message || e.message;
      setError(msg);

      // If key is wrong/expired, log out to be safe
      if (e?.response?.status === 401) {
        clearAdminKey();
        navigate("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  }

  async function approve(id) {
    try {
      await axios.patch(
        `${API}/api/reviews/${id}/approve`,
        {},
        { headers: { "x-admin-key": adminKey } }
      );
      await load(adminKey);
    } catch (e) {
      alert(e?.response?.data?.message || e.message);
    }
  }

  function logout() {
    clearAdminKey();
    navigate("/admin/login");
  }

  useEffect(() => {
    const key = getAdminKey();
    if (!key) {
      navigate("/admin/login");
      return;
    }
    setAdminKeyState(key);
    load(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">
            Admin — Review Approval
          </h1>
          <p className="mt-1 text-gray-600">
            Approve pending reviews to show them on the public Reviews page.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => load(adminKey)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold hover:bg-gray-50"
          >
            Refresh
          </button>
          <button
            onClick={logout}
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-bold text-white hover:bg-black"
          >
            Logout
          </button>
        </div>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
          {error}
        </div>
      )}

      {loading && <p className="mt-6 text-gray-600">Loading…</p>}

      {!loading && !error && (
        <div className="mt-6 space-y-4">
          {reviews.length === 0 && (
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-gray-600">
              No reviews found.
            </div>
          )}

          {reviews.map((r) => (
            <div key={r._id} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-extrabold text-gray-900">{r.name}</div>
                  <div className="text-sm text-gray-600">
                    {r.service} • {r.rating}/5
                  </div>
                  <p className="mt-3 text-gray-700 break-words">{r.message}</p>
                  <div className="mt-3 text-xs text-gray-500">
                    {r.approved ? "Approved ✅" : "Pending ⏳"}
                  </div>
                </div>

                {!r.approved ? (
                  <button
                    onClick={() => approve(r._id)}
                    className="shrink-0 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700"
                  >
                    Approve
                  </button>
                ) : (
                  <span className="shrink-0 rounded-xl bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
                    Approved
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
