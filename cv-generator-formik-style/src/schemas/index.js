import * as yup from "yup";

//setup regex variables
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }


export const resumeSchema = yup.object().shape({
    //put the different values here you want to validate for
    email: yup.string().email('please enter a valid email').required("Required"),
    age: yup
    .number()
    .positive()
    .integer()
    .required("Required"),
    phone: yup
    .string()
    .min(5)
    .matches(phoneRegExp, {message: 'Please enter a valid phone number'})
    .required("Required"),
    firstName: yup
    .string()
    .min(1, 'First Name must be at least 1 character long')
    .required("Required"),
    lastName: yup
    .string()
    .min(1, 'Last Name must be at least 1 character long')
    .required("Required"),
    school: yup
    .string()
    .min(1, 'School name must be at least 1 character long')
    .required("Required"),
    degree: yup
    .string()
    .min(1, 'degree name must be at least 1 character long')
    .required("Required"),
    major: yup
    .string()
    .min(1, 'School name must be at least 1 character long'),
    startDate: yup.date().min(1900).required("Required"),
    gradDate: yup
    .date()
    .min(
        yup.ref('startDate'),
        ({ min }) => `Date needs to be after ${formatDate(min)}!!`,
      ).required('Required'),
    

    
});