import React from 'react';
import './Form.css';

const Form = () => {

    return(
        <>
                    {/* FORM */}
                <legend>let's rock!</legend>
                <form>
                    <label className="username" id="username">name</label>
                        <input type="text" className="userinput"></input>
                    <label className="email" id="email">email</label>
                        <input type="email" className="emailinput"></input>
                    <label className="subject" id="subject">brief about your project</label>
                        <input type="text" className="subjectinput"></input>
                </form>
        </>
    )
}
export default Form;