import '../App.css';
import '../css/home.css'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

export default function LogCandidate() {
    return (
        <>
            <NavBar />
            <h3>Candidate</h3>
            <div class="login-wrap">
                <div class="login-html">
                    <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Log In</label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
                    <div class="login-form">
                        <div class="sign-in-htm">
                            <div class="group">
                                <label for="user" class="label">Username</label>
                                <input id="user" type="text" class="input" />
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Password</label>
                                <input id="pass" type="password" class="input" data-type="password" />
                            </div>
                            <div class="group">
                                <input id="check" type="checkbox" class="check" checked />
                                <label for="check"><span class="icon"></span> Keep me Signed in</label>
                            </div>
                            <div class="group">
                                <input type="submit" class="button" value="Sign In" />
                            </div>
                            <div class="hr"></div>
                            <div class="foot-lnk">
                                <footer>
                                    <ul className='list-unstyled d-flex justify-content-around'>
                                        <li><a href='#'><i class="bi bi-whatsapp" style={{ fontSize: "2rem", color: "#000000" }}></i></a></li>
                                        <li><a href='#' ><i class="bi bi-twitter" style={{ fontSize: "2rem", color: "#000000" }}></i></a></li>
                                        <li><a href='#' ><i class="bi bi-envelope-fill" style={{ fontSize: "2rem", color: "#000000" }}></i></a></li>
                                    </ul>
                                    <Link to="/"><i class="bi bi-x-lg" style={{ fontSize: "2rem", color: "#fa255e" }}></i></Link>

                                </footer>
                            </div>

                        </div>
                        <div class="sign-up-htm">
                            <div class="group">
                                <label for="user" class="label">Username</label>
                                <input id="user" type="text" class="input" />
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Password</label>
                                <input id="pass" type="password" class="input" data-type="password" />
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Repeat Password</label>
                                <input id="pass" type="password" class="input" data-type="password" />
                            </div>
                            <div class="group">
                                <label for="pass" class="label">Email Address</label>
                                <input id="pass" type="text" class="input" />
                            </div>
                            <br />
                            <div class="group">
                                <input type="submit" class="button" value="Sign Up" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}