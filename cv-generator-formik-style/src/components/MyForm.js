import React from "react";
import { useFormik } from "formik";
import CustomInput from "./CustomInput";
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
      lastName: ''
    },
    validationSchema: resumeSchema,
    onSubmit,
  });



  return (
    <form onSubmit={handleSubmit} autoComplete="off">
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
      
      <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
  );
}

export default MyForm;