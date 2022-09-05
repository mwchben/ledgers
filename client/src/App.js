import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        <nav>
          <h3> I am a</h3>
          <Link to="/logCandidate">Candidate</Link> |{" "}
          <Link to="/logVoter">Voter</Link>
        </nav>
        <footer>
          <ul className='list-unstyled d-flex justify-content-around'>
            <li><a href='#'><i className="bi bi-whatsapp" style={{ fontSize: "2rem", color: "#000000" }}></i></a></li>
            <li><a href='#' ><i className="bi bi-twitter" style={{ fontSize: "2rem", color: "#000000" }}></i></a></li>
            <li><a href='#' ><i className="bi bi-envelope-fill" style={{ fontSize: "2rem", color: "#000000" }}></i></a></li>
          </ul>
        </footer>
      </div>
    </>

  );
}

export default App;
