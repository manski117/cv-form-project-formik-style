//set state
const [formData, setFormData] = React.useState({
    school: '',
    degree: '',
    major:'',
    startDate: '',
    gradDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    job1: {
      companyName: '',
      position: '',
      tasks: '',
      jobStartDate: '',
      jobEndDate: ''
    },
    job2: {
      companyName: '',
      position: '',
      tasks: '',
      jobStartDate: '',
      jobEndDate: ''
    },
    job3: {
      companyName: '',
      position: '',
      tasks: '',
      jobStartDate: '',
      jobEndDate: ''
    },
    schoolValid: true,
    degreeValid: true,
    majorValid: true,
    startDateValid: true,
    gradDateValid: true,
    firstNameValid: true,
    lastNameValid: true,
    emailValid: true,
    phoneValid: true,
    job1Valid: true

  });


  return (
    <div className="resume-container">
     <h1 className="resume-name">{formData.firstName} {formData.lastName}</h1>
     <div className="contact-info-flexbox">
         <p>{formData.phone}</p>
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
                 <p className="company-name-text">{formData.job1.companyName}</p>
                 <p className="position-text">{formData.job1.position}</p>
                 <p>{formData.job1.tasks}</p>
             </div>
             <div className="job1-dates">
             <p className="job-dates">{formData.job1.jobStartDate} - {formData.job1.jobEndDate}</p>
             </div>
         </div>

         <div className="job2-flexbox section-flexbox">
             <div className="job-details">
                 <p className="company-name-text">{formData.job2.companyName}</p>
                 <p className="position-text">{formData.job2.position}</p>
                 <p>{formData.job2.tasks}</p>
             </div>
             <div className="job2-dates">
             {formData.job2.jobStartDate.length > 0 && 
                     <p className="job-dates">{formData.job2.jobStartDate} - {formData.job2.jobEndDate} </p>
                 }
             </div>
         </div>

         <div className="job3-flexbox section-flexbox">
             <div className="job-details">
                 <p className="company-name-text">{formData.job3.companyName}</p>
                 <p className="position-text">{formData.job3.position}</p>
                 <p>{formData.job3.tasks}</p>
             </div>
             <div className="job3-dates">
                 {formData.job3.jobStartDate.length > 0 && 
                     <p className="job-dates">{formData.job3.jobStartDate} - {formData.job3.jobEndDate} </p>
                 }
             </div>
         </div>
     </div>
     
    </div>
 )