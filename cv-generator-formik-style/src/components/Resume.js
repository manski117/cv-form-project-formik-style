import React from "react";


function Resume(props) {
    
    let formData = props.formData;
    

    return (
        <div className="resume-container">
        <h1 className="resume-name">{formData.firstName} {formData.lastName}</h1>
        <div className="contact-info-flexbox">
            <p>{formData.phone}</p>
            <p>{formData.age} years old</p>
            <p>{formData.email}</p>
        </div>
        <div className="education-flexbox">
            <div className="section-title">
                <h3 className="section-title">Education</h3>
            </div>
            <div className="school-flexbox section-flexbox">
                <div className="school-details">
                    <p className="company-name-text">{formData.school}</p>
                    <p>{formData.degree}</p>
                    <p>{formData.major}</p>
                </div>
                <div className="school-dates">
                    <p>{formData.startDate} - {formData.gradDate}</p>
                </div>
            </div>
        </div>
        <div className="work-flexbox">
            <div className="section-title">
                <h3 className="section-title">Work History</h3>
            </div>
            <div className="job1-flexbox section-flexbox">
                <div className="job-details">
                    <p className="company-name-text">{formData.companyName1}</p>
                    <p className="position-text">{formData.position1}</p>
                    <p>{formData.tasks1}</p>
                </div>
                <div className="job1-dates">
                <p className="job-dates">{formData.jobStartDate1} - {formData.jobEndDate1}</p>
                </div>
            </div>
   
            <div className="job2-flexbox section-flexbox">
                <div className="job-details">
                    <p className="company-name-text">{formData.companyName2}</p>
                    <p className="position-text">{formData.position2}</p>
                    <p>{formData.tasks2}</p>
                </div>
                <div className="job2-dates">
                {formData.jobStartDate2.length > 0 && 
                        <p className="job-dates">{formData.jobStartDate2} - {formData.jobEndDate2} </p>
                    }
                </div>
            </div>
   
            <div className="job3-flexbox section-flexbox">
                <div className="job-details">
                    <p className="company-name-text">{formData.companyName3}</p>
                    <p className="position-text">{formData.position3}</p>
                    <p>{formData.tasks3}</p>
                </div>
                <div className="job3-dates">
                    {formData.jobStartDate3.length > 0 && 
                        <p className="job-dates">{formData.jobStartDate3} - {formData.jobEndDate3} </p>
                    }
                </div>
            </div>
        </div>
        
       </div>
    )
}

export default Resume;