import React from "react";
import { useSelector } from "react-redux";

export default Counter = () => {
    const count = useSelector((state) => state.count);
    
    return (
        <div>
            {count}
        </div>
    )
}