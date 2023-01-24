
import Header from './components/Header';
import Footer from './components/Footer';
import MyForm from './components/MyForm';
import Resume from './components/Resume';
import React from 'react';

//creates a context obj to allow us to provide ctx
const FormContext = React.createContext(null);

function App() {
  /////////top scope variables/////////////
  //control which page is rendered to main
  const [onFormPage, setOnFormPage] = React.useState(true);
  //set state
  const [formData, setFormData] = React.useState({
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
    companyName1: '',
    position1: '',
    tasks1: '',
    jobStartDate1: '',
    jobEndDate1: '',
    companyName2: '',
    position2: '',
    tasks2: '',
    jobStartDate2: '',
    jobEndDate2: '',
    companyName3: '',
    position3: '',
    tasks3: '',
    jobStartDate3: '',
    jobEndDate3: '',

  }

  );

  //conditionally render what content renders based on page selection
  const currentPage = onFormPage ? <MyForm handleFormData={handleFormData} formData={formData} handleClick={togglePage} /> : <Resume formData={formData} />

  
  

  ////////functions/////////
  //this line will update when/if my obj changes
  React.useEffect(() => {
    console.log('new state just dropped:')
    console.log(formData);
  }, [formData]);

  

  function togglePage(){
      setOnFormPage(!onFormPage);
  
  }

  function handleFormData(childFormValues){
    
    setFormData(childFormValues);
  };


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