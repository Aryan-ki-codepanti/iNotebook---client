import React, { useState , useContext } from "react";
import { useHistory } from "react-router";
import AlertContext from "../context/alert/alertContext";

const Signup = () => {
    const history = useHistory();
    const { showAlert } = useContext(AlertContext);
    const host = "http://localhost:5000";
    const [inputSignup, setInputSignup] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const handleOnChange = event => {
        setInputSignup(prev => ({
            ...inputSignup,
            [event.target.name]: event.target.value,
        }));
    };

    const handleOnSubmit = async event => {
        event.preventDefault();

        // api call
        const url = `${host}/api/auth/createuser`;
        const { name, email, password } = inputSignup;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();

        if (data.success) {
            // save token and redirect
            localStorage.setItem("token", data.authToken);
            history.push("/");
            showAlert("Account Created Successfully" , "success");
        } else {
            showAlert("Invalid Details" , "danger");
        }
    };

    return (
        <div className="my-5">
            <h2> Signup to use iNotebook </h2>
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        {" "}
                        Name{" "}
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your Name"
                        value={inputSignup.name}
                        onChange={handleOnChange}
                        minLength={5}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={inputSignup.email}
                        onChange={handleOnChange}
                        minLength={5}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={inputSignup.password}
                        onChange={handleOnChange}
                        minLength={5}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="cpassword"
                        name="cpassword"
                        placeholder="Enter your password again"
                        value={inputSignup.cpassword}
                        onChange={handleOnChange}
                        minLength={5}
                        required
                    />
                </div>

                <button
                    disabled={inputSignup.password !== inputSignup.cpassword}
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
