import React, { useState } from "react";

export default Index = (props) => {

    const [courses, setCourses] = useState([
        {
            id: 1,
            name: "BS Computer Science",
            category: "Undergrad"
        },
        {
            id: 2,
            name: "MS Computer Science",
            category: "Graduate"
        }
    ]);

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