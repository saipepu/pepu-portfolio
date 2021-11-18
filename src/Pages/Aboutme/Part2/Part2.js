import React,{useState} from 'react';
import './Part2.css';
import Form from '../../Home/Form/Form';

const Part2 = () => {
    const [showContact, setShowContact] = useState(false);

    const contact = () => {
        setShowContact(!showContact);
    }
    const formClose = () => {
        setShowContact(false);
    }
   
    return(
        <>
        <div className="aboutme-part2-container">
            <div className="part2-projects">projects<div className="part2-circle1"></div></div>
            <div className="myskills">My Skills</div>
            <div className="figma">Figma</div>
            <div className="reactjs-redux"><div className="reactjs">React js</div><div className="redux">redux</div></div>
            <div className="javascript-api"><div className="js">JavaScript</div><div className="api">API fetching</div></div>
            <div className="htmlcss-bootstrap"><div className="htmlcss">HTML,CSS</div><div className="bootstrap">Bootstrap</div></div>
            <div className="uiux-text"><div className="uiux">UI/UX</div><div className="text">Designing and implementing unique and cool interfaces that enhances users experience.</div></div>
            <div className="part2-contact" onClick={contact}>contact me<div className="part2-circle2"></div></div>
            <div className="aboutme-scroll-icon-wrapper">
                    <div className="scroll-text">
                        Scroll
                    </div>
                    <div className="border-1">
                        <div className="border-2"></div>
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
            {/* FOR MOBILE */}
            <div className="text-mobile">Designing and implementing unique and cool interfaces that enhances users experience.</div>
            <div className="redux-mobile">Redux</div>
            <div className="api-fetching-mobile">API fetching</div>
            <div className="bootstrap-mobile">Bootstrap</div>
        </div>
        </>
    )
}
export default Part2;