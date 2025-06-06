import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';
import People from './pages/People';
import Teaching from './pages/Teaching';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="research" element={<Research />} />
        <Route path="publications" element={<Publications />} />
        <Route path="team" element={<People />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;