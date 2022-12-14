import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar'
import Home from '../src/components/Home/Home'
/* import About from '../src/components/About/About' */
/* import Skills from '../src/components/Skills/Skills'
 */import Projects from '../src/components/Projects/Projects'
import Contact from '../src/components/Contact/Contact'
import './App.css';

function App() {

  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About/>} /> */}
        {/* <Route path="/skills" element={<Skills/>} /> */}
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </Router>

  );
}

export default App
