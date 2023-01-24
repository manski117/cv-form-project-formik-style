import React from "react";


function Resume(props) {
    
    let formData = props.formData;
    // let job2exists = formData.job2.startDate;
    // console.log(job2exists);

    return (
       <div className="temporary-container">
        <h3>{formData.firstName}</h3>
        <h3>{formData.email}</h3>
        <h3>{formData.age}</h3>
        <h3>{formData.lastName}</h3>
        <h3>{formData.phone}</h3>
        <h3>{formData.school}</h3>
        <h3>{formData.major}</h3>
        <h3>{formData.degree}</h3>
        <h3>{formData.startDate}</h3>
        <h3>{formData.gradDate}</h3>
       </div>
    )
}

export default Resume;