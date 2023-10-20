
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Display from "./Display";

function Login() {
    const [login, setLogin] = useState({
        name: "",
        surname: "",
        password: ""
    });

    const [display, setDisplay] = useState([]);

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, surname, password } = login;

        if (name && surname && password) {
            const newLogin = { ...login, id: uuidv4() };
            setDisplay([...display, newLogin]);
            setLogin({ name: "", surname: "", password: "" }); // Clear the input fields
        }
    }

    const handleDelete = (id) => {
        let filteredList = display.filter(item => item.id !== id);
        setDisplay(filteredList);
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={login.name} placeholder="Enter your name" onChange={(e) => handleChange(e)} required />
                </div>
                <div>
                    <label htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" name="surname" value={login.surname} placeholder="Enter your surname" onChange={(e) => handleChange(e)} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={login.password} placeholder="Enter your password" onChange={(e) => handleChange(e)} required />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            <Display display={display} handleDelete={handleDelete} />
        </div>
    );
}

export default Login;


