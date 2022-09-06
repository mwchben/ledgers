import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; //connect app to the browser's URL
import Home from './pages/Home';
import LogCandidate from './pages/LogCandidate';
import LogVoter from './pages/LogVoter';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logVoter" element={<LogVoter />} />
          <Route path="/logCandidate" element={<LogCandidate />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
