import React from "react";
import { useSelector } from "react-redux";

export default CourseCount = () => {
    const count = useSelector((state) => state.courseCount);

    return (
        <div>
            {count}
        </div>
    )
}