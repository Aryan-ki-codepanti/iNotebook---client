import { BrowserRouter as Router , Route , Switch  } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/Alert";

function App() {

	
    return (
	<>
		<NoteState>
		<AlertState>
		<Router>
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
				</Switch>
			</div>
		</Router>
		</AlertState>
		</NoteState>
	</>)
};

export default App;
