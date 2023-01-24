import * as yup from "yup";

//setup regex variables
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;



// export const resumeSchema = yup.object().shape({
//     firstName: yup
//     .string()
//     .min(1, 'First Name must be at least 1 character long')
//     .required("Required"),
//     lastName: yup
//     .string()
//     .min(1, 'Last Name must be at least 1 character long')
//     .required("Required"),
    
// });

export const resumeSchema = yup.object().shape({
    //put the different values here you want to validate for
    email: yup.string().email('please enter a valid email, man').required("Required"),
    age: yup
    .number()
    .positive()
    .integer()
    .required("Required"),
    
});