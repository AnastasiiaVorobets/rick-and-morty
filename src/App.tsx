import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './global.scss';
import EpisodesPage from './pages/EpisodesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EpisodesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
