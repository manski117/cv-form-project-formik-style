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

function MyForm({handleFormData}) {
  async function onSubmit(values, actions){
    //timeout and disabled button CSS let user know info is being submitted
    console.log('values',values);
    console.log('actions',actions);
    handleFormData(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  }
  //any formik component must define 3 key props: initial values, validate, and onSubmit handler.
  //handleSubmit just calls onSubmit
  const {values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues: {
      age: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      school: '',
      degree: '',
      major:'',
      startDate: '',
      gradDate: '',
    },
    validationSchema: resumeSchema,
    onSubmit,
  });



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
      {/* UPDATE PAST HERE */}
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


      
      
      <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
  );
}

export default MyForm;