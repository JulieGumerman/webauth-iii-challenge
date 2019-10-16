import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {

    useEffect(() => {
        axios.get("http://localhost:2468/api/users")
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Hi! I am the users page.</h1> 
            <h2>I should be secure, but right now my builder is just stoked that she got you this far!!!</h2>
        </div>
        );
}

export default Users;