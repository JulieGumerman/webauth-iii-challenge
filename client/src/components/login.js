import React, { useState } from "react";
import axios from "axios";
import Nav from "./nav.js";

const Login = props => {
    const [ returningUser, setReturningUser ] = useState({ username: "", password: ""})

    const handleChange = e => {
        const { name, value } = e.target;
        setReturningUser({...returningUser, [name]: value})
        console.log(returningUser);
    }

    const submitReturningUser = (e, creds) => {
        e.preventDefault();
        axios.post("http://localhost:2468/api/login", creds)
            .then(res => {
                props.history.push("/users")
                localStorage.setItem("token", res.data.token)
            })
            .catch(err => {
                console.log("oops", err)
            })
    }

    return (
        <div>
            <Nav />
            <h1>Just your friendly neighborhood login page</h1>
            <form onSubmit={(e) => submitReturningUser(e, returningUser)}>
                <label>
                    Username: 
                    <input 
                        name="username"
                        value={returningUser.username}
                        onChange={handleChange}
                    />
                    </label>
                <label>
                    Password: 
                    <input 
                        name="password"
                        value={returningUser.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Sign in!</button>
            </form>
        </div>
    );
}

export default Login;