
import './App.css';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <>

      <div className="App">
        <NavBar />
        <SignUp />
        {/* < Home /> */}
      </div>
    </>

  );
}

export default App;
