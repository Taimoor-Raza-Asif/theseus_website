import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Milestones from './components/Milestones';
import WorkWithUs from './components/WorkWithUs';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllMilestonesPage from './pages/AllMilestonesPage';
import AllServicesPage from './pages/AllServicesPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <Milestones />
      <WorkWithUs />
      <Services />
      <About />
      <Contact />
    </main>
  );
}

function AppInner() {
  const { dark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar dark={dark} toggleTheme={toggle} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/milestones" element={<AllMilestonesPage />} />
        <Route path="/services" element={<AllServicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
