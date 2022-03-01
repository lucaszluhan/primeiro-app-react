import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cards from './pages/Cards/Cards';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/*" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}
