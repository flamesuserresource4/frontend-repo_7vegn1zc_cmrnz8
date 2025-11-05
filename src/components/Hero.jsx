import { GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-200 shadow-sm">
              <GraduationCap className="h-4 w-4" /> Empowering Underprivileged Students in India
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Free Education and Skill Training for a Brighter Future
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We help students from low-income communities access quality education, learn in-demand skills, and build sustainable careers. Join us in creating equal opportunities for every child.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#get-involved"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Donate Now
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Explore Programs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1604881987921-cba3f40e43f9?q=80&w=1600&auto=format&fit=crop"
                alt="Students learning with computers"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-indigo-200/50 blur-2xl" />
            <div className="pointer-events-none absolute -top-6 -right-10 h-48 w-48 rounded-full bg-violet-200/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
