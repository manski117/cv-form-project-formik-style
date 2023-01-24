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
    companyName1: yup.string().min(2, 'Company name must be more than two letters long').required("Required"),
    companyName2: yup.string().min(2, 'Company name must be more than two letters long'),
    companyName3: yup.string().min(2, 'Company name must be more than two letters long'),
    position1: yup.string().min(2, 'position name must be at least 2 or more characters').required("Required"),
    position2: yup.string().min(2, 'position name must be at least 2 or more characters'),
    position3: yup.string().min(2, 'position name must be at least 2 or more characters'),
    tasks1: yup.string().min(3, 'If you wish not to describe, type N/A').required("Required"),
    tasks2: yup.string().min(3, 'If you wish not to describe, type N/A'),
    tasks3: yup.string().min(3, 'If you wish not to describe, type N/A'),
    jobStartDate1: yup.date().min(1900, 'Please chose a date in the last 120 years').required("Required"),
    jobStartDate2: yup.date().min(1900, 'Please chose a date in the last 120 years'),
    jobStartDate3: yup.date().min(1900, 'Please chose a date in the last 120 years'),
    jobEndDate1: yup.string().min(2, "Field cannot be blank. If this is your current job, just type 'Present'").required("Required"),
    jobEndDate2: yup.date().min(yup.ref('jobStartDate2'), ({ min }) => `Date needs to be after ${formatDate(min)}!!`,),
    jobEndDate3: yup.date().min(yup.ref('jobStartDate3'), ({ min }) => `Date needs to be after ${formatDate(min)}!!`,),

    

    
});