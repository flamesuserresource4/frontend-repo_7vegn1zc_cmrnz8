import { BookOpen, Laptop, Users } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'Foundational Learning',
    description:
      'Free classes in Maths, Science, English and regional languages with digital resources, mentorship, and regular assessments.',
    points: ['After-school support', 'Scholarship guidance', 'Language labs'],
  },
  {
    icon: Laptop,
    title: 'Digital & Job-ready Skills',
    description:
      'Practical training in computer literacy, web basics, coding, MS Office, and employability skills to build sustainable careers.',
    points: ['Computer labs', 'Project-based learning', 'Career counselling'],
  },
  {
    icon: Users,
    title: 'Community Mentorship',
    description:
      'Volunteer-led mentoring, soft-skills development, and peer learning circles to boost confidence and real-world readiness.',
    points: ['1:1 mentoring', 'Communication workshops', 'Interview prep'],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Programs</h2>
          <p className="mt-3 text-slate-600">
            Structured initiatives designed to provide access, knowledge, and pathways to employment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{p.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
