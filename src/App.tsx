import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';
import People from './pages/People';
import News from './pages/News';
import Contact from './pages/Contact';
import ResearchDetail from './pages/ResearchDetail';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/research" element={<Research />} />
    <Route path="/research/:areaId" element={<Research />} />
    <Route path="/research/:areaId/:domainId" element={<Research />} />
    <Route path="/project/:id" element={<ProjectDetail />} />
    <Route path="publications" element={<Publications />} />
    <Route path="team" element={<People />} />
    <Route path="news" element={<News />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>

  );
}

export default App;