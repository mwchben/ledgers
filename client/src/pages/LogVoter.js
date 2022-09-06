import '../App.css';
import '../css/home.css'
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function LogVoter() {

    const URL_REG = "http://localhost:8000/voters/reg"
    const URL_LOG = "http://localhost:8000/voters/log"

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


    console.log(dataLog);

    function handleRegSubmit(e) {
        e.preventDefault()
        axios.post(URL_REG, {
            name: data.name, email: data.email, regno: data.regno, password: data.password
        })
            .then(response => {
                //console.log(response.data.message);

                if (response.data.success_msg) {
                    toast.success(JSON.stringify(response.data.success_msg).replace(/"/g, ''), {
                        position: toast.POSITION.TOP_CENTER
                    });
                }

                if (response.data.message) {

                    if (response.data.message.email) {
                        toast.error(JSON.stringify(response.data.message.email).replace(/"/g, ''), {
                            position: toast.POSITION.TOP_LEFT
                        });
                    }

                    if (response.data.message.name) {
                        toast.error(JSON.stringify(response.data.message.name).replace(/"/g, ''), {
                            position: toast.POSITION.TOP_LEFT
                        });
                    }

                    if (response.data.message.regno) {
                        toast.error(JSON.stringify(response.data.message.regno).replace(/"/g, ''), {
                            position: toast.POSITION.TOP_LEFT
                        });
                    }

                    if (response.data.message.password) {
                        toast.error(JSON.stringify(response.data.message.password).replace(/"/g, ''), {
                            position: toast.POSITION.TOP_LEFT
                        });
                    }
                }
            })
    }


    function handleLogSubmit(e) {
        e.preventDefault()
        axios.post(URL_LOG, {
            email: dataLog.email, password: dataLog.password
        }, { withCredentials: true })
            .then(response => {
                console.log(response.data);
                toast.info(response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }


    return (
        <>
            <h3>Voter</h3>
            <div className="login-wrap">
                <div className="login-html">

                    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Log In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Register</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
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

                        <div className="sign-up-htm">
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
            <ToastContainer />

        </>
    );
}