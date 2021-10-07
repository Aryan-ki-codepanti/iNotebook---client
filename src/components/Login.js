import React , { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AlertContext from '../context/alert/alertContext';

const Login = () => {
    const history = useHistory();
    const { showAlert } = useContext(AlertContext);
    const host = "http://localhost:5000";
    const [inputLogin , setInputLogin] = useState({
        email: "",
        password: ""
    });

    const handleOnChange = event => {
        setInputLogin(prev => ({
            ...inputLogin,
            [event.target.name]: event.target.value
        }))
    };  

    const handleOnSubmit = async (event) => {
        event.preventDefault();
    
        // api call
        const url = `${host}/api/auth/login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputLogin)
        });
        const data = await response.json();

        if (data.success){
            // save token and redirect
            localStorage.setItem("token" , data.authToken);
            showAlert("Logged in Successfully" , "success");
            history.push("/");

        }
        else{
            showAlert("Invalid credentials" , "danger");
        }

    };

    return (
        <div className="my-5">
            <h2> Login to use iNotebook </h2>
            <form onSubmit={handleOnSubmit} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your Email"
                    value={inputLogin.email}
                    onChange={handleOnChange} />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password"
                    value={inputLogin.password}
                    onChange={handleOnChange} />
                </div>
                <button type="submit" className="btn btn-primary" > Submit </button>
            </form>
        </div>
    )
};

export default Login;
