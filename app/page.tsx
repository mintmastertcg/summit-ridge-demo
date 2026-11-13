
"use client";

import { useState, type FormEvent } from "react";

const services = [
  {
    number: "01",
    title: "Air Conditioning",
    description:
      "Keep your home cool with reliable AC repairs, installations, and seasonal maintenance.",
    icon: "❄",
  },
  {
    number: "02",
    title: "Heating Systems",
    description:
      "Stay comfortable when temperatures drop with heating diagnostics, repairs, and replacements.",
    icon: "♨",
  },
  {
    number: "03",
    title: "Preventive Maintenance",
    description:
      "Help prevent unexpected breakdowns and keep your equipment performing throughout the year.",
    icon: "⚙",
  },
];

const benefits = [
  {
    title: "Clear Communication",
    description: "Understand your options before any work begins.",
  },
  {
    title: "Practical Solutions",
    description: "Heating and cooling recommendations for your home.",
  },
  {
    title: "Easy Scheduling",
    description: "Request an estimate without complicated phone menus.",
  },
];

const faqs = [
  {
    question: "How do I request an estimate?",
    answer:
      "Use the service request form below. On a live contractor website, the request would be delivered to the business.",
  },
  {
    question: "What heating and cooling services are available?",
    answer:
      "This demo showcases air conditioning, heating, and preventive maintenance services.",
  },
  {
    question: "Can I request maintenance?",
    answer:
      "Yes. Select Maintenance in the demo form to see how customers would submit a maintenance inquiry.",
  },
  {
    question: "Is Summit Ridge a real company?",
    answer:
      "No. Summit Ridge Heating & Air is a fictional company created as a website portfolio demonstration.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#f8f9f7] pb-20 text-[#182a36] md:pb-0">
      <div className="bg-[#d8e8f0] px-4 py-2 text-center text-xs font-bold tracking-wide text-[#234456]">
        PORTFOLIO DEMO — FICTIONAL BUSINESS
      </div>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#163c52] text-xl font-bold text-white">
              S
            </div>
            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight">
                SUMMIT RIDGE
              </div>
              <div className="text-[10px] font-bold tracking-[0.25em] text-[#647b89]">
                HEATING & AIR
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-9 text-sm font-semibold md:flex">
            <a href="#services" className="hover:text-[#d66b3b]">
              Services
            </a>
            <a href="#about" className="hover:text-[#d66b3b]">
              About
            </a>
            <a href="#faq" className="hover:text-[#d66b3b]">
              FAQs
            </a>
            <a href="#contact" className="hover:text-[#d66b3b]">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-lg bg-[#d66b3b] px-6 py-3 text-sm font-bold text-white hover:bg-[#b95328] md:inline-flex"
          >
            Request Service →
          </a>

          <button
            type="button"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-slate-100 bg-white px-6 py-5 text-sm font-semibold md:hidden">
            {[
              ["Services", "#services"],
              ["About", "#about"],
              ["FAQs", "#faq"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#15394f] text-white">
        <div className="pointer-events-none absolute -right-28 -top-40 h-[550px] w-[550px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 -top-24 h-[400px] w-[400px] rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-[#bfe1ee]">
              HOME COMFORT, SIMPLIFIED
            </div>

            <h1 className="animate-fade-up max-w-2xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Your comfort.
              <br />
              <span className="text-[#f2a47b]">Our priority.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#d1e0e8]">
              Reliable heating and cooling solutions designed to keep
              your home comfortable in every season.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-[#e27646] px-8 py-4 text-sm font-extrabold text-white hover:bg-[#c65f31]"
              >
                Get a Free Estimate →
              </a>
              <a
                href="#services"
                className="rounded-lg border border-white/30 px-8 py-4 text-sm font-bold text-white hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-7 border-t border-white/15 pt-7 text-sm text-[#d1e0e8]">
              <span>✓ Cooling</span>
              <span>✓ Heating</span>
              <span>✓ Maintenance</span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border-[6px] border-white/10 shadow-2xl">
              {/* External image for demo purposes */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85"
                alt="Technician working with mechanical equipment"
                className="h-[440px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-xl bg-white px-6 py-5 text-[#16394f] shadow-xl sm:-left-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Built around your home
              </p>
              <p className="mt-1 text-xl font-extrabold">
                Comfort in every season
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d66b3b]">
              What We Do
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Complete comfort solutions.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              From repairs to routine maintenance, we make heating and
              cooling service straightforward.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-9 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#e27646]/40 hover:shadow-2xl"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf2f5] text-3xl">
                    {service.icon}
                  </span>
                  <span className="text-sm font-bold text-slate-300">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-block text-sm font-extrabold text-[#cb6538]"
                >
                  Request Service →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#eaf0f1] px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-[#163c52] p-9 text-white sm:p-12">
            <div className="text-6xl font-black text-[#f2a47b]">
              01
            </div>
            <h2 className="mt-7 text-4xl font-extrabold leading-tight">
              Service built around people, not just equipment.
            </h2>
            <p className="mt-6 leading-8 text-[#d1e0e8]">
              Great home service starts with clear communication,
              thoughtful recommendations, and respect for your time.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d66b3b]">
              Why Summit Ridge
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight">
              A better service experience starts here.
            </h2>

            <div className="mt-9 space-y-7">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d66b3b] font-bold text-white">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d66b3b]">
              Common Questions
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Everything you need to know.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-[#f8f9f7] p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-2xl text-[#d66b3b] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d66b3b]">
              Get Started
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let's get your home comfortable.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Tell us about your heating or cooling needs.
              This demonstration shows how customers could request service.
            </p>

            <div className="mt-10 rounded-xl border border-[#d8e4e9] bg-[#edf4f7] p-6">
              <p className="font-bold">Portfolio demonstration</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Summit Ridge is fictional. This form does not send
                information to a contractor or save submissions.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            onChange={() => setSubmitted(false)}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10"
          >
            <h3 className="text-2xl font-extrabold">
              Request an Estimate
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Demo only — no information will be sent.
            </p>

            <div className="mt-8 grid gap-5">
              <label className="grid gap-2 text-sm font-bold">
                Full Name
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-[#d66b3b]"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold">
                Email Address
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-[#d66b3b]"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold">
                Service Needed
                <select
                  required
                  name="service"
                  defaultValue=""
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#d66b3b]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="ac">Air Conditioning</option>
                  <option value="heat">Heating</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-bold">
                Tell Us More
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Briefly describe what you need..."
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none focus:border-[#d66b3b]"
                />
              </label>

              <button
                type="submit"
                className="rounded-lg bg-[#d66b3b] px-6 py-4 font-extrabold text-white hover:bg-[#b95328]"
              >
                Submit Demo Request →
              </button>

              {submitted && (
                <p
                  role="status"
                  className="rounded-lg bg-green-50 p-4 text-sm font-semibold text-green-800"
                >
                  Demo successful! No information was sent or saved.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <a
          href="#contact"
          className="flex w-full items-center justify-center rounded-xl bg-[#d66b3b] px-6 py-4 text-sm font-extrabold text-white shadow-lg"
        >
          Request Your Free Estimate →
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#102e40] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-extrabold">
              SUMMIT RIDGE
            </p>
            <p className="text-xs font-bold tracking-[0.2em] text-[#9db9c9]">
              HEATING & AIR
            </p>
          </div>
          <p className="text-sm text-[#9db9c9]">
            Fictional business website · Portfolio demonstration
          </p>
        </div>
      </footer>
    </main>
  );
}
