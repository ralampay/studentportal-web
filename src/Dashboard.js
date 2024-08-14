import React, { useState } from "react";
import { Link } from "react-router-dom";
import Controls from "./Controls";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "./store";
import Counter from "./Counter";

export default Dashboard = () => {
    return (
        <div>
            Dashboard
            <hr/>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4>
                                Number of Students
                            </h4>
                            <h6>
                                0
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4>
                                Number of Courses (fetch from backend)
                            </h4>
                            <h6>
                                0
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <Provider store={store}>
                <Counter/>
                <Controls/>
            </Provider>
        </div>
    )
}