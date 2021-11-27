import Sign_up_form from './Form_Signup'
import Login_form from './Form_login'
import React, { useState } from 'react'
import './Form.css';

const Form = () => {

    const [Submitted, setIsSubmitted] = useState(false);

    function submitted_data() {
        setIsSubmitted(true);
    }
    return ( <
        >
        <
        div className = 'form-container' >
        <
        span className = 'close-btn' > × < /span> <
        div className = 'form-content-left' >
        <
        img className = 'form-img'
        src = 'img/img-2.svg'
        alt = 'spaceship' / >
        <
        /div> {
            !Submitted ? ( <
                Sign_up_form submitted_data = { submitted_data }
                />
            ) : ( <
                Login_form / >
            )
        } <
        /div> <
        />
    );
};

export default Form;