import { Link } from "react-router-dom";

import Student from "./pages/Student";


function App() {
  return (
    <>
      <div className="App">
        <nav>
          <h3> I am a</h3>
          <Link to="/logCandidate">Candidate</Link> |{" "}
          <Link to="/logVoter">Voter</Link>
        </nav>

      </div>
    </>

  );
}

export default App;
