import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './global.scss';
import EpisodesPage from './pages/EpisodesPage';
import CharacterPage from './pages/CharactersPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EpisodesPage />} />
          <Route path="/characters" element={<CharacterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
