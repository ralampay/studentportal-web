import React, { useState } from "react";
import { Link } from "react-router-dom";
import Controls from "./Controls";
import { Provider } from "react-redux";
import store from "./store";

export default Dashboard = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            Dashboard
            <hr/>

            <div>
                {counter}
            </div>

            <Provider store={store}>
                <Controls
                    increment={increment}
                    decrement={decrement}
                />
            </Provider>
        </div>
    )
}