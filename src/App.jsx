import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import ImpactStats from './components/ImpactStats';
import HowToHelp from './components/HowToHelp';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <ImpactStats />
        <HowToHelp />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ShikshaSahay Foundation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#programs" className="hover:text-slate-900">Programs</a>
            <a href="#impact" className="hover:text-slate-900">Impact</a>
            <a href="#get-involved" className="hover:text-slate-900">Get Involved</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
