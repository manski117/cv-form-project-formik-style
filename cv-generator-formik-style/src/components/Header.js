import React from "react"

function Header(props) {
    //take in state from parent component
    //state reflects page selected
    const onFormPage = props.selected ? true : false;
    
    console.log(onFormPage)
    
    //depending on selected page, one button should gain function and loose active class, while the other does the opposite.
    //this way we only need one handleClick function in the parent component
    return (
        <header className="header">
            <div className="button-wrapper">
                
                <button 
                    className={onFormPage ? "active" : "not-active"}
                    onClick={onFormPage ? null : props.handleClick} 
                    >Edit CV
                </button>
                <button 
                    className={onFormPage ? "not-active" : "active"}
                    onClick={onFormPage ? props.handleClick : null}
                    >Generate CV
                </button>

            </div>
            <h1>CV Generator App</h1>
            <h3>by Manski117</h3>

        </header>
    )
}

export default Header