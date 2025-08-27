import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Tutorials from './pages/Tutorials';
import News from './pages/News';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navigation />
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
