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
            <Provider store={store}>
                <Counter/>
                <Controls/>
            </Provider>
        </div>
    )
}