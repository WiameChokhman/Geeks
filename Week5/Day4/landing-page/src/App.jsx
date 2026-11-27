
import Header from "./components/Header";
import Card from "./components/Card";
import Contact from "./components/Contact";

import { Rocket, Zap, Smartphone } from "lucide-react";

function App() {

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="text-center px-6 py-10">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Build a Responsive Landing Page
          <br />
          with React
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          A mini-project to practice building responsive
          landing pages using React components.
        </p>

        <a
          href="#features"
          className="inline-block bg-red-500 text-white text-xl font-bold px-16 py-4 rounded-lg hover:bg-red-600 transition shadow-lg"
        >
          Get Started
        </a>

      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Card
            icon={Rocket}
            title="Fast Performance"
            description="Our landing page loads quickly and runs smoothly across all devices."
          />

          <Card
            icon={Zap}
            title="Easy to Use"
            description="Our landing page is simple and intuitive for users to navigate."
          />

          <Card
            icon={Smartphone}
            title="Modern Design"
            description="Our landing page features a clean, modern, and responsive design."
          />

        </div>

      </section>

      {/* Contact Section */}
      <Contact />

    </div>
  );
}

export default App;
