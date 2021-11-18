import React,{ useState } from 'react';
import './Part3.css';
import Form from '../../Home/Form/Form';

const Part3 = () => {
    const [showContact, setShowContact] = useState(false);

    const contact = () => {
        setShowContact(!showContact);
    }
    const formClose = () => {
        setShowContact(false);
    }

    return(
        <>
        <div className="aboutme-part3-container">
            <div className="aboutme-part3-text-wrapper">
                <div className="part3-title">Work With Me</div>
                <div className="part3-text">I am listener rather than a speaker,<br/>I am willing to hearing people out and<br/>solving their problems.</div>
                <div className="part3-links">
                    <div className="part3-projects">projects<div className="part3-circle1"></div></div>
                    <div className="part3-contact" onClick={contact}>contact<div className="part3-circle2"></div></div>
                </div>
            </div>
                                                {/* FORM */}
            <div className={showContact ? "form-bg": ""}></div>

            <div className={showContact ? "form-wrapper-active" : "form-wrapper-hide"}>
                <div className="form-close" onClick={formClose}>
                        <div className="form-bar formbar1-active"></div>
                        <div className="form-bar formbar2-active"></div>
                        <div className="form-bar formbar3-active"></div>
                </div>
                    <Form />
            </div>
        </div>
        </>
    )
}
export default Part3;