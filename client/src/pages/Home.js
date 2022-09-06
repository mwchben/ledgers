// landing page

import { Link } from "react-router-dom";

import React from "react";

export default function Home() {
    return (
        <>
            <div className="h-screen flex items-center">
                <div className="w-1/2 px-10 space-y-4">
                    <h1>
                        <b className="text-[#21846a] text-8xl">Vote</b>{" "}
                        <b className="text-text-neutral-900 text-8xl">for</b>
                        <b className="text-[#84213b] text-8xl">Your Leader</b>
                    </h1>

                    <p className="text-3xl first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left font-mono font-bold
">
                        Well, let me tell you something, funny boy. Y'know that little stamp, the one
                        that says "New York Public Library"? Well that may not mean anything to you,
                        but that means a lot to me. One whole hell of a lot.
                    </p>
                    <div className="space-x-5">
                        <Link to="/logVoter"><button className="bg-[#21846a] px-10 py-3 text-white font-bold text-2xl">Voter</button></Link>
                        {" "}
                        <Link to="/logCandidate"><button className="bg-[#84213b] px-10 py-3 text-white font-bold text-2xl">Candidate</button></Link>
                    </div>
                </div>

                <div className="w-1/2">
                    <lottie-player src="https://assets4.lottiefiles.com/datafiles/WFfSsX8UQ9XlCP2ZdIqtIUaZjXl8pRK6ucYufety/Register to vote!/data.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
            </div>
        </>
    );
};

{/* <div className="App">
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
      </div> */}