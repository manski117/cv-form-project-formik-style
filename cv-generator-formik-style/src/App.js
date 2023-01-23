import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Resume from './components/Resume';
import React from 'react';

//creates a context obj to allow us to provide ctx
const FormContext = React.createContext(null);

function App() {
  /////////top scope variables/////////////
  //control which page is rendered to main
  const [onFormPage, setOnFormPage] = React.useState(true);

  //conditionally render what content renders based on page selection
  const currentPage = onFormPage ? <Form /> : <Resume />

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
  

  ////////functions/////////
  //this line will update when/if my obj changes
  React.useEffect(() => {
    console.log('new state just dropped:')
    console.log(formData);
  }, [formData]);

  function formIsValid(){
    //link this to meta.errors or isSubmitting or something
    return true;
  }

  function togglePage(){
    if (formIsValid(formData)){
      setOnFormPage(!onFormPage);
      console.log(onFormPage);
      
    } else{
      alert('Form contains missing fields');
      console.log(formData);
    }

    
  }


  return (
    <div className="app-container">
      <Header 
        selected={onFormPage}
        handleClick={togglePage}/>
      
        <FormContext.Provider value={{formData, setFormData}}>
          <div className="main-content">
            {currentPage}
          
          </div>
        </FormContext.Provider>
      

      <Footer />
      
    </div>
  );
}

export  {App, FormContext};