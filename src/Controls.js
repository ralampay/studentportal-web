import React from "react";
import ControlsUi from "./ControlsUi";
import { useSelector } from "react-redux";

export default Controls = (props) => {
    const count = useSelector((state) => state.count);

    return (
        <div className="card">
            <div className="card-header">
                {count}
            </div>
            <div className="card-body">
                <ControlsUi/>
            </div>
        </div>
    )
}