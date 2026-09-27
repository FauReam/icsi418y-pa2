import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";

function App() {
    const [page, setPage] = useState("signup");

    return (
        <div className="app">
            <h1>Welcome</h1>
            <div className="tabs">
                <button
                    className={page === "signup" ? "tab active" : "tab"}
                    onClick={() => setPage("signup")}
                >
                    Sign Up
                </button>
                <button
                    className={page === "login" ? "tab active" : "tab"}
                    onClick={() => setPage("login")}
                >
                    Log In
                </button>
            </div>
            {page === "signup" ? <Signup /> : <Login />}
        </div>
    );
}

export default App;
