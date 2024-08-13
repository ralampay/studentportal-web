import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

export default ControlsUi = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => {
                    dispatch(increment());
                }}
            >
                Increment
            </button>
            <button
                className="btn btn-danger"
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                Decrement
            </button>
        </div>
    )
}