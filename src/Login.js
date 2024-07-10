import React, { useState } from "react";
import { login, createSession } from "./services/AuthService";

export default Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        login(username, password).then((payload) => {
            createSession(payload.data);

            // refresh page
            window.location.reload();
        }).catch((payload) => {
            console.log("Error in logging in");
            console.log(payload);
        })
    }

    return (
        <div className="container">
            <div className="mt-4"/>
            <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>
                            Username
                        </label>
                        <input
                            value={username}
                            className="form-control"
                            disabled={isLoading}
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                    </div>
                    <div className="mt-2"/>
                    <div className="form-group">
                        <label>
                            Password
                        </label>
                        <input
                            value={password}
                            type="password"
                            className="form-control"
                            disabled={isLoading}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>
                    <hr/>
                    <button 
                        className="btn btn-primary w-100"
                        disabled={isLoading}
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}