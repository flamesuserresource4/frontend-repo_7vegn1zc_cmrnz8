import { Heart, Mail, Phone, Globe } from 'lucide-react';

export default function HowToHelp() {
  return (
    <section id="get-involved" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white via-indigo-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Get Involved</h2>
            <p className="mt-3 text-slate-600">
              Your support powers free education, skill training, and career pathways for students from low-income communities.
              Choose how you’d like to contribute.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Donate</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Every contribution funds classrooms, devices, internet, and mentorship. You’ll receive impact reports quarterly.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    <Heart className="h-4 w-4" /> Donate Online
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Corporate CSR
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Volunteer</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Mentor a student, teach a class, or support operations remotely. Flexible slots on weekends and evenings.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Sign up to volunteer
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Contact Us</h3>
            <p className="mt-2 text-sm text-slate-600">
              We’re registered as a not-for-profit in India. Reach out for partnerships, donations, or media enquiries.
            </p>
            <dl className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-600" />
                <div>
                  <dt className="font-medium">Email</dt>
                  <dd>hello@shikshasahay.org</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-600" />
                <div>
                  <dt className="font-medium">Phone</dt>
                  <dd>+91 98765 43210</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-indigo-600" />
                <div>
                  <dt className="font-medium">Address</dt>
                  <dd>ShikshaSahay Foundation, Bengaluru, India</dd>
                </div>
              </div>
            </dl>

            <form className="mt-8 grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                <input id="name" type="text" className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input id="email" type="email" className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" rows={4} className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="How would you like to help?" />
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
                Send message
              </button>
              <p className="text-xs text-slate-500">We’ll get back within 2-3 business days.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
