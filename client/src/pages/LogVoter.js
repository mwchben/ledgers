import '../App.css';
import '../css/home.css'
import { useState } from 'react';
import axios from 'axios'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

export default function LogVoter() {

    const URL = "http://localhost:8000/voters/reg"
    const [data, setData] = useState({
        name: "",
        email: "",
        regno: "",
        password: ""
    })

    console.log(data);

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(URL, {
            name: data.name, email: data.email, regno: data.regno, password: data.password
        })
            .then(response => {
                console.log(response.data);
            })
    }

    return (
        <>
            <NavBar />
            <h3>Voter</h3>
            <div className="login-wrap">
                <div className="login-html">

                    <input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Log In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">TUK Email Address</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            {/* <div className="group">
                                <input id="check" type="checkbox" className="check" checked />
                                <label htmlFo="check"><span className="icon"></span> Keep me Signed in</label>
                            </div> */}
                            <div className="group">
                                <input type="submit" className="button" value="Sign In" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <Link to="/"><i className="bi bi-x-lg" style={{ fontSize: "2rem", color: "#fa255e" }}></i></Link>
                            </div>

                        </div>

                        <div className="sign-up-htm">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="group">
                                    <label htmlFor="name" className="label">Name</label>
                                    <input id="name" type="text" name="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="label">TUK Email Address</label>
                                    <input id="email" type="email" name="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="regno" className="label">Registration Number</label>
                                    <input id="regno" type="text" name="regno" value={data.regno} onChange={(e) => setData({ ...data, regno: e.target.value })} className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="password" className="label">Password</label>
                                    <input id="password" type="password" name="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className="input" data-type="password" />
                                </div>

                                <br />
                                <div className="group">
                                    <input type="submit" className="button" value="Register" />
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>


        </>
    );
}