import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO with background image */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url(/images/hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/25" />

        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/20">
                Home Nursing & Care Services
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                Trusted Care at Home for Your Loved Ones
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/90">
                Health Care Home Nursing provides compassionate, professional care at home —
                supporting families with Baby Sitting, Elder Care, and Patient Care services.
              </p>

              {/* ✅ Use Link instead of <a href> */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-600"
                >
                  Contact Us
                </Link>

                <Link
                  to="/reviews"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/25 hover:bg-white/15"
                >
                  View Reviews
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <TrustChip title="Professional Care" desc="Respectful, safe & reliable service." />
                <TrustChip title="Flexible Scheduling" desc="Hourly, daily & long-term options." />
                <TrustChip title="Home Comfort" desc="Care in a familiar environment." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Healthcare Home Nursing Service (Pvt) Limited
            </h2>

            <p className="mt-2 text-lg font-semibold text-emerald-700">
              Compassionate Care at Home, Delivered with Excellence
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Welcome to Healthcare Home Nursing Service (Pvt) Limited. We specialize in
              bringing expert nursing and personalized support directly to you, prioritizing
              your comfort, safety, and well-being above all else.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATED SERVICE MODEL */}
      <section className="bg-gray-50 border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            Our Differentiated Service Model
          </h3>

          <p className="mt-3 max-w-3xl text-gray-600">
            We serve discerning professionals, seniors, and families who expect the highest
            standard of in-home healthcare solutions.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              title="Tailored Care Plans"
              text="Comprehensive medical and personal care programs custom-designed for individual needs."
            />
            <FeatureCard
              title="24/7 Expert Support"
              text="Access to professional nurses and certified caregivers, available around the clock."
            />
            <FeatureCard
              title="Reliable Elite Care"
              text="Luxury in-home healthcare delivered with precision, discretion, and professionalism."
            />
          </div>

          <p className="mt-6 max-w-4xl text-gray-600 leading-relaxed">
            Operating exclusively under our distinguished tagline,{" "}
            <span className="font-semibold text-gray-900">Reliable Elite Care</span>, we offer bespoke nursing
            and personalized support delivered with utmost precision and discretion.
            Our clientele consists of individuals and families who demand more than just care;
            they demand an elevated standard of living and peace of mind.
          </p>
        </div>
      </section>

      {/* DISTINCTION */}
      <section className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            Our Distinction: Beyond the Ordinary
          </h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <BulletCard
              title="Uncompromising Excellence"
              text="Providing a dedicated, professional nursing and support system delivered directly to a residence, ensuring comfort and safety without compromise."
            />
            <BulletCard
              title="Bespoke Client Focus"
              text="Services uniquely tailored to individual needs, managed by a team of expert nurses and caregivers available 24/7."
            />
            <BulletCard
              title="Unrivaled Expertise"
              text="We bring a level of professional nursing and compassionate support straight to your residence that is unmatched in the industry."
            />
            <BulletCard
              title="A Singular Focus"
              text="We are dedicated solely to client well-being, focusing entirely on comprehensive health management and recovery."
            />
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
            <h4 className="font-extrabold text-emerald-900">Our Exclusive Commitment</h4>
            <ul className="mt-3 space-y-2 text-emerald-900/90">
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  <span className="font-semibold">Unrivaled Expertise:</span> Professional nursing and compassionate
                  support straight to your residence.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  <span className="font-semibold">Bespoke Services:</span> Tailored care plans managed by expert nurses
                  and caregivers available 24/7.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                <span>
                  <span className="font-semibold">A Singular Focus:</span> Dedicated solely to client well-being,
                  comprehensive health management and recovery.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ELITE SERVICE PORTFOLIO */}
      <section className="bg-gray-50 border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
            Elite Service Portfolio
          </h3>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <EliteItem text="Premier Post-Surgery Recovery" />
            <EliteItem text="Discreet Elderly & Senior Management" />
            <EliteItem text="Private Physiotherapy Regimens" />
            <EliteItem text="Exclusive Baby & Neonatal Care" />
            <EliteItem text="Customized Medical & Personal Support" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-extrabold text-gray-900">Services We Offer</h2>
          <p className="mt-2 text-gray-600">
            Choose the care service that matches your needs.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              title="Baby Sitting"
              desc="Safe, gentle, and attentive care for infants and children in your home."
              bullets={["Feeding & routine help", "Play & supervision", "Safe home care"]}
            />
            <ServiceCard
              title="Elder Care"
              desc="Daily assistance, companionship, mobility support, and wellbeing checks."
              bullets={["Daily living support", "Companionship", "Mobility assistance"]}
            />
            <ServiceCard
              title="Patient Care"
              desc="Post-surgery and long-term support, medication reminders, and basic monitoring."
              bullets={["Post-surgery support", "Medication reminders", "Basic monitoring"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900">
                Need care support today?
              </h3>
              <p className="mt-2 text-gray-600">
                Contact us for availability, pricing, and service details.
              </p>
            </div>

            {/* ✅ Link instead of <a href> */}
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function ServiceCard({ title, desc, bullets }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 grid place-items-center font-extrabold">
          ✓
        </div>
        <h3 className="text-lg font-extrabold text-gray-900">{title}</h3>
      </div>

      <p className="mt-3 text-gray-600">{desc}</p>

      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 inline-block h-2 w-2 rounded-full bg-emerald-600" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrustChip({ title, desc }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
      <div className="text-sm font-extrabold text-white">{title}</div>
      <div className="mt-1 text-sm text-white/85">{desc}</div>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h4 className="font-extrabold text-gray-900">{title}</h4>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}

function BulletCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h4 className="font-extrabold text-gray-900">{title}</h4>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}

function EliteItem({ text }) {
  return (
    <div className="rounded-xl border border-emerald-200 bg-white px-4 py-3 font-semibold text-emerald-800">
      {text}
    </div>
  );
}
