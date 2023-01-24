import React from "react";
import { useFormik } from "formik";
import CustomInput from "./CustomInput.js";
import { resumeSchema } from "../schemas";


// const onSubmit = async (values, actions) =>{
//   //timeout and disabled button CSS let user know info is being submitted
//   console.log(values);
//   console.log(actions);
  
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// }

function MyForm({handleFormData, formData}) {
  async function onSubmit(values, actions){
    //timeout and disabled button CSS let user know info is being submitted
    console.log('values',values);
    console.log('you just slammed the submit button!!!!!!!');
    console.log('actions',actions);
    handleFormData(values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
  //any formik component must define 3 key props: initial values, validate, and onSubmit handler.
  //handleSubmit just calls onSubmit
  const {values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting} = useFormik({
    
    initialValues: {
      age: formData.age,
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      school: formData.school,
      degree: formData.degree,
      major:formData.major,
      startDate: formData.startDate,
      gradDate: formData.gradDate,
      companyName1: formData.companyName1,
      position1: formData.position1,
      tasks1: formData.tasks1,
      jobStartDate1: formData.jobStartDate1,
      jobEndDate1: formData.jobEndDate1,
      companyName2: formData.companyName2,
      position2: formData.position2,
      tasks2: formData.tasks2,
      jobStartDate2: formData.jobStartDate2,
      jobEndDate2: formData.jobEndDate2,
      companyName3: formData.companyName3,
      position3: formData.position3,
      tasks3: formData.tasks3,
      jobStartDate3: formData.jobStartDate3,
      jobEndDate3: formData.jobEndDate3,
    },
    validationSchema: resumeSchema,
    onSubmit,
  });

  console.log('data from app state', formData);
  console.log('values', values);



  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <label htmlFor="email">Email</label>
      <input 
        id="email" 
        type="email" 
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.email && touched.email ? 'input-error' : ''}
       
      />
      {errors.email && touched.email && <p className='error'>{errors.email}</p>}
      <br />
      <label htmlFor="age">Age</label>
      <input 
        id="age" 
        type="number" 
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.age && touched.age ? 'input-error' : ''}
      />
      {errors.age && touched.age && <p className='error'>{errors.age}</p>}
      <br />
      
      <label htmlFor="firstName">First Name</label>
      <input 
        id="firstName" 
        type="text" 
        placeholder="Enter your First Name"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.firstName && touched.firstName ? 'input-error' : ''}
      />
      {errors.firstName && touched.firstName && <p className='error'>{errors.firstName}</p>}
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input 
        id="lastName" 
        type="text" 
        placeholder="Enter your lastName"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.lastName && touched.lastName ? 'input-error' : ''}
      />
      {errors.lastName && touched.lastName && <p className='error'>{errors.lastName}</p>}
      <br />
      
      <label htmlFor="phone">Phone Number</label>
      <input 
        id="phone" 
        type="text" 
        placeholder="Enter your phone number"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.phone && touched.phone ? 'input-error' : ''}
      />
      {errors.phone && touched.phone && <p className='error'>{errors.phone}</p>}
      <br />
      
      <label htmlFor="school">School</label>
      <input 
        id="school" 
        type="text" 
        placeholder="University or Academic Institution"
        value={values.school}
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.school && touched.school ? 'input-error' : ''}
      />
      {errors.school && touched.school && <p className='error'>{errors.school}</p>}
      <br />

      <label htmlFor="degree">Degree</label>
      <input 
        id="degree" 
        type="text" 
        placeholder="Highest degree obtained"
        value={values.degree}
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.degree && touched.degree ? 'input-error' : ''}
      />
      {errors.degree && touched.degree && <p className='error'>{errors.degree}</p>}
      <br />

      <label htmlFor="major">Major</label>
      <input 
        id="major" 
        type="text" 
        placeholder="Major, concentration, or track"
        value={values.major}
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.major && touched.major ? 'input-error' : ''}
      />
      {errors.major && touched.major && <p className='error'>{errors.major}</p>}
      <br />

      <label htmlFor="startDate">Year Enrolled</label>
      <input 
        id="startDate" 
        type="text" 
        placeholder="Year you started school"
        value={values.startDate}
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.startDate && touched.startDate ? 'input-error' : ''}
      />
      {errors.startDate && touched.startDate && <p className='error'>{errors.startDate}</p>}
      <br />

      <label htmlFor="gradDate">Year Graduated</label>
      <input 
        id="gradDate" 
        type="text" 
        placeholder="Enter year of graduation or expected graduation"
        value={values.gradDate}
        onChange={handleChange}
        onBlur={handleBlur} 
        className={errors.gradDate && touched.gradDate ? 'input-error' : ''}
      />
      {errors.gradDate && touched.gradDate && <p className='error'>{errors.gradDate}</p>}
      <br />

      {/* UPDATE PAST HERE */}
      <div className="job-section-wrapper">
        <h4>Job 1</h4>
        <label htmlFor="companyName1">Company Name</label>
        <input
          id="companyName1"
          type="text"
          placeholder="Company or organization name"
          value={values.companyName1}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.companyName1 && touched.companyName1 ? 'input-error' : ''}
        />
        {errors.companyName1 && touched.companyName1 && <p className='error'>{errors.companyName1}</p>}
        <br />
        <label htmlFor="position1">Position</label>
        <input
          id="position1"
          type="text"
          placeholder="Position/Title/Role"
          value={values.position1}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.position1 && touched.position1 ? 'input-error' : ''}
        />
        {errors.position1 && touched.position1 && <p className='error'>{errors.position1}</p>}
        <br />
        <label htmlFor="tasks1">Tasks</label>
        <textarea
          id="tasks1"
          type="textarea"
          maxLength={200}
          placeholder="Description of duties"
          value={values.tasks1}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.tasks1 && touched.tasks1 ? 'input-error' : ''}
        />
        {errors.tasks1 && touched.tasks1 && <p className='error'>{errors.tasks1}</p>}
        <br />

        <label htmlFor="startDate1">Started</label>
        <input
          id="jobStartDate1"
          type="text"
          placeholder="Year hired"
          value={values.jobStartDate1}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.jobStartDate1 && touched.jobStartDate1 ? 'input-error' : ''}
        />
        {errors.jobStartDate1 && touched.jobStartDate1 && <p className='error'>{errors.jobStartDate1}</p>}
        <br />

        <label htmlFor="jobEndDate1">Left</label>
        <input
          id="jobEndDate1"
          type="text"
          placeholder="Last year or present job"
          value={values.jobEndDate1}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.jobEndDate1 && touched.jobEndDate1 ? 'input-error' : ''}
        />
        {errors.jobEndDate1 && touched.jobEndDate1 && <p className='error'>{errors.jobEndDate1}</p>}
        <br />
      </div>

      <div className="job-section-wrapper">
        <h4>Job 2</h4>
        <label htmlFor="companyName2">Company Name</label>
        <input
          id="companyName2"
          type="text"
          placeholder="Company or organization name"
          value={values.companyName2}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.companyName2 && touched.companyName2 ? 'input-error' : ''}
        />
        {errors.companyName2 && touched.companyName2 && <p className='error'>{errors.companyName2}</p>}
        <br />
        <label htmlFor="position2">Position</label>
        <input
          id="position2"
          type="text"
          placeholder="Position/Title/Role"
          value={values.position2}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.position2 && touched.position2 ? 'input-error' : ''}
        />
        {errors.position2 && touched.position2 && <p className='error'>{errors.position2}</p>}
        <br />
        <label htmlFor="tasks2">Tasks</label>
        <textarea
          id="tasks2"
          type="textarea"
          maxLength={200}
          placeholder="Description of duties"
          value={values.tasks2}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.tasks2 && touched.tasks2 ? 'input-error' : ''}
        />
        {errors.tasks2 && touched.tasks2 && <p className='error'>{errors.tasks2}</p>}
        <br />

        <label htmlFor="startDate2">Started</label>
        <input
          id="jobStartDate2"
          type="text"
          placeholder="Year hired"
          value={values.jobStartDate2}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.jobStartDate2 && touched.jobStartDate2 ? 'input-error' : ''}
        />
        {errors.jobStartDate2 && touched.jobStartDate2 && <p className='error'>{errors.jobStartDate2}</p>}
        <br />

        <label htmlFor="jobEndDate2">Left</label>
        <input
          id="jobEndDate2"
          type="text"
          placeholder="Last year or present job"
          value={values.jobEndDate2}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.jobEndDate2 && touched.jobEndDate2 ? 'input-error' : ''}
        />
        {errors.jobEndDate2 && touched.jobEndDate2 && <p className='error'>{errors.jobEndDate2}</p>}
        <br />
      </div>

      <div className="job-section-wrapper">
        <h4>Job 3</h4>
        <label htmlFor="companyName3">Company Name</label>
        <input
          id="companyName3"
          type="text"
          placeholder="Company or organization name"
          value={values.companyName3}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.companyName3 && touched.companyName3 ? 'input-error' : ''}
        />
        {errors.companyName3 && touched.companyName3 && <p className='error'>{errors.companyName3}</p>}
        <br />
        <label htmlFor="position3">Position</label>
        <input
          id="position3"
          type="text"
          placeholder="Position/Title/Role"
          value={values.position3}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.position3 && touched.position3 ? 'input-error' : ''}
        />
        {errors.position3 && touched.position3 && <p className='error'>{errors.position3}</p>}
        <br />
        <label htmlFor="tasks3">Tasks</label>
        <textarea
          id="tasks3"
          type="textarea"
          maxLength={200}
          placeholder="Description of duties"
          value={values.tasks3}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.tasks3 && touched.tasks3 ? 'input-error' : ''}
        />
        {errors.tasks3 && touched.tasks3 && <p className='error'>{errors.tasks3}</p>}
        <br />

        <label htmlFor="startDate3">Started</label>
        <input
          id="jobStartDate3"
          type="text"
          placeholder="Year hired"
          value={values.jobStartDate3}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.jobStartDate3 && touched.jobStartDate3 ? 'input-error' : ''}
        />
        {errors.jobStartDate3 && touched.jobStartDate3 && <p className='error'>{errors.jobStartDate3}</p>}
        <br />

        <label htmlFor="jobEndDate3">Left</label>
        <input
          id="jobEndDate3"
          type="text"
          placeholder="Last year or present job"
          value={values.jobEndDate3}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.jobEndDate3 && touched.jobEndDate3 ? 'input-error' : ''}
        />
        {errors.jobEndDate3 && touched.jobEndDate3 && <p className='error'>{errors.jobEndDate3}</p>}
        <br />
      </div>

      

  
      
      <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
  );
}

export default MyForm;