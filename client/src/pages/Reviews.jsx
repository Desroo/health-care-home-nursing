import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Reviews() {
  const [form, setForm] = useState({
    name: "",
    service: "Baby Sitting",
    rating: "5",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function loadReviews() {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/api/reviews`);
      setReviews(res.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReviews();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitted(false);

    await axios.post(`${API}/api/reviews`, {
      name: form.name,
      service: form.service,
      rating: Number(form.rating),
      message: form.message,
    });

    setSubmitted(true);
    setForm({ name: "", service: "Baby Sitting", rating: "5", message: "" });
  }

  return (
    <main className="bg-white">
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Client Reviews
          </h1>
          <p className="mt-4 max-w-3xl text-gray-600">
            Reviews are for <span className="font-semibold">Health Care Home Nursing</span> (the company),
            not individual caregivers. Reviews appear after approval.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold text-gray-900">Leave a Review</h2>

            {submitted && (
              <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                Thank you! Your review was submitted for approval.
              </div>
            )}

            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="text-sm font-medium text-gray-700">Your Name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Service</label>
                  <select
                    className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
                    name="service"
                    value={form.service}
                    onChange={onChange}
                  >
                    <option>Baby Sitting</option>
                    <option>Elder Care</option>
                    <option>Patient Care</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Rating</label>
                  <select
                    className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
                    name="rating"
                    value={form.rating}
                    onChange={onChange}
                  >
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Good</option>
                    <option value="3">3 - Okay</option>
                    <option value="2">2 - Poor</option>
                    <option value="1">1 - Very bad</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="mt-1 w-full min-h-[120px] rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Write your feedback about the company service"
                  required
                />
              </div>

              <button className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black">
                Submit Review
              </button>
            </form>
          </div>

          {/* List */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold text-gray-900">Approved Reviews</h2>

            {loading ? (
              <p className="mt-4 text-gray-600">Loading...</p>
            ) : reviews.length === 0 ? (
              <p className="mt-4 text-gray-600">No approved reviews yet.</p>
            ) : (
              <div className="mt-6 space-y-4">
                {reviews.map((r) => (
                  <ReviewCard
                    key={r._id}
                    name={r.name}
                    service={r.service}
                    rating={r.rating}
                    message={r.message}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function ReviewCard({ name, service, rating, message }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{service}</div>
        </div>
        <div className="text-sm font-semibold text-gray-900">{rating}/5</div>
      </div>
      <p className="mt-3 text-gray-700">{message}</p>
    </div>
  );
}
