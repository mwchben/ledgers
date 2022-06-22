
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
          Welcome to SCIT Voting Portal
        </header>
        < Home />
      </div>
    </>

  );
}

export default App;
