import './App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import NavBar from './Component/NavBar';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieProvider';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
