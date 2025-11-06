import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import StoryShowcase from './components/StoryShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <FeaturedGrid />
      <StoryShowcase />
      <Footer />
    </div>
  );
}

export default App;
