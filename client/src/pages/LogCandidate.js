import '../App.css';
import '../css/home.css'
import axios from 'axios';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

export default function LogCandidate() {

    const URL_REG = "http://localhost:8000/candidates/reg"
    const URL_LOG = "http://localhost:8000/candidates/log"

    const [data, setData] = useState({
        name: "",
        email: "",
        regno: "",
        password: ""
    })

    const [dataLog, setDataLog] = useState({
        email: "",
        password: ""
    })

    // console.log(data);
    console.log(dataLog);

    function handleRegSubmit(e) {
        e.preventDefault()
        axios.post(URL_REG, {
            name: data.name, email: data.email, regno: data.regno, password: data.password
        })
            .then(response => {
                console.log(response.data);
            })
    }
    function handleLogSubmit(e) {
        e.preventDefault()
        axios.post(URL_LOG, {
            email: dataLog.email, password: dataLog.password
        })
            .then(response => {
                console.log(response.data);
            })
    }

    return (
        <>
            <NavBar />
            <h3>Candidate</h3>
            <div class="login-wrap">
                <div class="login-html">
                    <input id="tab-1" type="radio" name="tab" class="sign-in" defaultChecked /><label htmlFor="tab-1" class="tab">Log In</label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up" /><label htmlFor="tab-2" class="tab">Register</label>
                    <div class="login-form">
                        <div class="sign-in-htm">
                            <form onSubmit={(e) => handleLogSubmit(e)}>
                                <div className="group">
                                    <label htmlFor="email" className="label">TUK Email Address</label>
                                    <input id="email" type="email" name="email" value={dataLog.email} onChange={(e) => setDataLog({ ...dataLog, email: e.target.value })} placeholder="voter@students.tukenya.ac.ke" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="password" className="label">Password</label>
                                    <input id="password" type="password" name="password" value={dataLog.password} onChange={(e) => setDataLog({ ...dataLog, password: e.target.value })} className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Login" />
                                </div>
                            </form>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <Link to="/" style={{ color: "#fa255e" }}>Back</Link>
                            </div>
                        </div>
                        <div class="sign-up-htm">
                            <form onSubmit={(e) => handleRegSubmit(e)}>
                                <div className="group">
                                    <label htmlFor="name" className="label">Name</label>
                                    <input id="name" type="text" name="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Firstname   lastname" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="label">TUK Email Address</label>
                                    <input id="email" type="email" name="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="voter@students.tukenya.ac.ke" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="regno" className="label">Registration Number</label>
                                    <input id="regno" type="text" name="regno" value={data.regno} onChange={(e) => setData({ ...data, regno: e.target.value })} placeholder="SCII/00000/2010" className="input" />
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