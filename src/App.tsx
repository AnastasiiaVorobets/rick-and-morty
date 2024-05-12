import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EpisodesPage from './pages/EpisodesPage';
import CharacterPage from './pages/CharactersPage';
import LocationsPage from './pages/LocationsPage';
import './styles/reset.scss';
import './styles/globalStyles.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EpisodesPage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/locations" element={<LocationsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
