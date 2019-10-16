import React, { useState } from "react";


const Register = () => {
    const [ newUser, setNewUser ] = useState({ username: "", password: "", department: ""})

    const handleChange = e => {
        
    }
    return (
        <div>
            <h1>Register page</h1>
            <form>
                <label> 
                    Name: 
                    <input 
                        name="username"
                        value={newUser.username}
                    />
                </label>
                <label>
                    Password: 
                    <input 
                        name="password"
                        value={newUser.password}
                    />
                    </label>
                <label>
                    Department: 
                    <input 
                        name="department"
                        value={newUser.department}
                    />
                    </label>
                <button>Register!</button>
            </form>
        </div>
    );
}

export default Register;