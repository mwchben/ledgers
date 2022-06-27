import { Link } from "react-router-dom";
// import Home from './pages/Home'
// import Candidate from "./pages/Candidate";
import Student from "./pages/Student";
// import Moderator from "./pages/Moderator";

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <h3> I am a </h3>
          <Link to="/logCandidate">Candidate</Link> |{" "}
          <Link to="/logVoter">Voter</Link>
        </nav>

        {/* < Home /> */}
        {/* <Moderator /> */}
        {/* < Candidate /> */}
        {/* <Student /> */}
      </div>
    </>

  );
}

export default App;
