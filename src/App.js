import Nav from './components/main/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import SmoothScroll from './lib/SmoothScroll.component';
import Loading from './components/main/Loading';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <SmoothScroll>
        <Nav />
        <Loading />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={useLocation()} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </SmoothScroll>
    </div>
  );
}

export default App;
