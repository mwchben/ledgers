
// .......................................::Side Notes::.................................................//
<a className="" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    Learn React
</a>



// .......................................::Routing::.................................................//

import { Link } from "react-router-dom";

export default function App() {
    return (
        <>
            <nav>
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>
        </>
    );
}

//while the index.js is
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "expenses";
import Invoices from "invoices";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
        </Routes>
    </BrowserRouter>
);

// .......................................::Others::.................................................//
<div className="box">
    <div className="container">
        <ul class="nav nav-pills nav-justified mb-4" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
            </li>
        </ul>


        <div class="tab-content" id="pills-tabContent">

            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <form>
                    <div className="text-center mb-3">
                        <p>Sign in with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                        </button>
                    </div>

                    <p className="text-center">or:</p>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <input type="email" id="loginName" className="form-control" />
                        <label className="form-label" for="loginName">Email or username</label>
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                        <input type="password" id="loginPassword" className="form-control" />
                        <label className="form-label" for="loginPassword">Password</label>
                    </div>

                    {/* 2 column grid layout */}
                    <div className="row mb-4">
                        <div className="col-md-6 d-flex justify-content-center">
                            {/* Checkbox */}
                            <div className="form-check mb-3 mb-md-0">
                                <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                <label className="form-check-label" for="loginCheck"> Remember me </label>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center">
                            {/* Simple link */}
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                    {/* Register buttons */}
                    <div className="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                    </div>
                </form>
            </div>

            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <form>
                    <div className="text-center mb-3">
                        <p>Sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                        </button>
                    </div>

                    <p className="text-center">or:</p>

                    {/* Name input */}
                    <div className="form-outline mb-4">
                        <input type="text" id="registerName" className="form-control" />
                        <label className="form-label" for="registerName">Name</label>
                    </div>

                    {/* Username input */}
                    <div className="form-outline mb-4">
                        <input type="text" id="registerUsername" className="form-control" />
                        <label className="form-label" for="registerUsername">Username</label>
                    </div>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <input type="email" id="registerEmail" className="form-control" />
                        <label className="form-label" for="registerEmail">Email</label>
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                        <input type="password" id="registerPassword" className="form-control" />
                        <label className="form-label" for="registerPassword">Password</label>
                    </div>

                    {/* Repeat Password input */}
                    <div className="form-outline mb-4">
                        <input type="password" id="registerRepeatPassword" className="form-control" />
                        <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                    </div>

                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                            aria-describedby="registerCheckHelpText" />
                        <label className="form-check-label" for="registerCheck">
                            I have read and agree to the terms
                        </label>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                </form>
            </div>

        </div>

    </div>
</div>