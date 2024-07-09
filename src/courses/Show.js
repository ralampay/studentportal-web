import React, { useState, useEffect } from "react";
import { DEFAULT_COURSE } from "../Defaults";

export default Show = (props) => {

    const [course, setCourse] = useState(DEFAULT_COURSE);

    return (
        <div>
            <h2>
                {course.name}
            </h2>
        </div>
    )
}