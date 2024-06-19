import React, { useState, useEffect } from "react";
import { getCourses } from "../../services/CoursesService";

export default Index = (props) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then((payload) => {
            setCourses(payload.data);
        });
    }, [])

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => {
                        return (
                            <tr key={`course-${course.id}`}>
                                <td>
                                    {course.id}
                                </td>
                                <td>
                                    {course.name}
                                </td>
                                <td>
                                    {course.category}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}