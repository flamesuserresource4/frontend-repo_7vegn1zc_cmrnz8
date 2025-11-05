export default function ImpactStats() {
  const stats = [
    { label: 'Students Supported', value: '12,500+' },
    { label: 'Scholarships Facilitated', value: '1,800+' },
    { label: 'Job Placements', value: '750+' },
    { label: 'Volunteer Hours', value: '90,000+' },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Impact</h2>
          <p className="mt-3 text-slate-600">Real outcomes powered by community support and transparent operations.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold tracking-tight text-slate-900">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-indigo-200 bg-white p-6 sm:p-8 shadow-sm">
          <p className="text-slate-700">
            We focus on underserved communities across India with special initiatives for girls in STEM, rural digital literacy,
            and career readiness for youth entering the workforce. Transparency is central to our work — detailed reports and
            utilisation updates are shared with donors every quarter.
          </p>
        </div>
      </div>
    </section>
  );
}
