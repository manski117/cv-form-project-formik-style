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
        <h3>{formData.companyName1}</h3>
        <h3>{formData.position1}</h3>
        <h3>{formData.tasks1}</h3>
        <h3>{formData.jobStartDate1}</h3>
        <h3>{formData.jobEndDate1}</h3>
        <h3>{formData.companyName2}</h3>
        <h3>{formData.position2}</h3>
        <h3>{formData.tasks2}</h3>
        <h3>{formData.jobStartDate2}</h3>
        <h3>{formData.jobEndDate2}</h3>
        <h3>{formData.companyName3}</h3>
        <h3>{formData.position3}</h3>
        <h3>{formData.tasks3}</h3>
        <h3>{formData.jobStartDate3}</h3>
        <h3>{formData.jobEndDate3}</h3>
       </div>
    )
}

export default Resume;