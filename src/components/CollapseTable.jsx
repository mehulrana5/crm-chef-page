import React, { useState } from "react";
import './CollapseTable.css'
const CollapseTable = (props) => {
    const [expandedRow, setExpandedRow] = useState(null);

    const handleRowClick = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Cuisine</th>
                    <th>Qualification</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((row, index) => (
                    <React.Fragment key={index}>
                        <tr onClick={() => handleRowClick(index)} style={{ cursor: "pointer" }}>
                            <td data-label="name">{row.data.name}</td>
                            <td data-label="contactNumber">{row.data.contactNumber}</td>
                            <td data-label="email">{row.data.email}</td>
                            <td data-label="city">{row.data.city}</td>
                            <td data-label="state">{row.data.state}</td>
                            <td data-label="cuisine">{row.data.cuisine.join(", ")}</td>
                            <td data-label="qualification">{row.data.qualification}</td>
                            <td data-label="salary">{row.data.salary}</td>
                        </tr>
                        {expandedRow === index && (
                            <tr>
                                <td colSpan="8" style={{ backgroundColor: "#f9f9f9" }}>
                                    <div style={{ padding: "10px" }}>
                                        <div>Basic Details</div>
                                        <div>Professional Details</div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default CollapseTable;
