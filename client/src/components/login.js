import React from "react";

const Login = () => {
    return (
        <div>
            <h1>Just your friendly neighborhood login page</h1>
            <form>
                <label>Username: <input /></label>
                <label>Password: <input /></label>
                <button>Sign in!</button>
            </form>
        </div>
    );
}

export default Login;