import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;
const ADMIN_KEY = prompt("Enter admin key");

export default function AdminReviews() {
  const [reviews, setReviews] = useState([]);

  async function load() {
    const res = await axios.get(`${API}/api/reviews/admin/all`, {
      headers: { "x-admin-key": ADMIN_KEY },
    });
    setReviews(res.data);
  }

  async function approve(id) {
    await axios.patch(
      `${API}/api/reviews/${id}/approve`,
      {},
      { headers: { "x-admin-key": ADMIN_KEY } }
    );
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-extrabold mb-6">Admin Review Approval</h1>

      {reviews.map((r) => (
        <div
          key={r._id}
          className="border rounded-xl p-4 mb-4 bg-white shadow-sm"
        >
          <div className="flex justify-between">
            <div>
              <p className="font-bold">{r.name}</p>
              <p className="text-sm text-gray-600">{r.service}</p>
              <p className="mt-2">{r.message}</p>
              <p className="text-sm mt-1">Rating: {r.rating}</p>
            </div>

            {!r.approved && (
              <button
                onClick={() => approve(r._id)}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg"
              >
                Approve
              </button>
            )}
          </div>

          {r.approved && (
            <p className="text-green-600 font-semibold mt-2">Approved</p>
          )}
        </div>
      ))}
    </div>
  );
}
