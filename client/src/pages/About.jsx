export default function About() {
  return (
    <main className="bg-white">
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            About Health Care Home Nursing
          </h1>
          <p className="mt-4 max-w-3xl text-gray-600 text-base sm:text-lg">
            We are dedicated to delivering reliable and caring home services.
            Our goal is to support families with trained caregivers and a
            professional service experience.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InfoCard title="Mission" desc="Provide safe, compassionate and consistent home care." />
            <InfoCard title="Values" desc="Respect, dignity, safety, and trust." />
            <InfoCard title="Quality" desc="We focus on client comfort and family satisfaction." />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
          <p className="mt-2 text-gray-600">
            Reach out for availability, pricing, and service details.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ContactCard label="Phone" value="+94 770631398" />
            <ContactCard label="WhatsApp" value="+94 721000801" />
            <ContactCard label="Email" value="healthcarehomenursing2020@email.com" />
            <ContactCard label="Service Area" value="Sri Lanka" />
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Contact us for more details.
          </p>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="text-sm font-semibold text-gray-600">{title}</div>
      <div className="mt-2 text-gray-900 font-bold">{desc}</div>
    </div>
  );
}

function ContactCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="text-sm font-semibold text-gray-600">{label}</div>
      <div className="mt-2 text-gray-900 font-bold">{value}</div>
    </div>
  );
}
