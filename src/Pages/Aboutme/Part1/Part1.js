import React,{ useState} from 'react';
import './Part1.css'
import Form from '../../Home/Form/Form';
import { Link } from 'react-router-dom'

const Part1 = () => {
    const [showContact, setShowContact] = useState(false);

    const contact = () => {
        setShowContact(!showContact);
    }
    const formClose = () => {
        setShowContact(false);
    }

    return(
        <>
        <div className="aboutme-part1-container">
            <Link to="/">
                <div className="aboutme-back-btn">
                    <div className="aboutme-backarrow1"></div>
                    <div className="aboutme-backarrow2"></div>
                </div>
            </Link>
            <div className="iam">I am</div>
            <div className="part1-bio1">Before I dive into web dev<br/>I was majoring in ECE at MIIT,Mandalay,Myanmar.</div>
            <div className="projects">projects<div className="part1-circle1"></div></div>
            <div className="pepu">PEPU</div>
            <div className="part1-bio2">I am a frontend developer<br/>and UI/UX designer.<br/>A Coder who can Design,<br/>A Designer who can code.</div>
            <div className="aboutme-scroll-icon-wrapper">
                    <div className="scroll-text">
                        Scroll
                    </div>
                    <div className="border-1">
                        <div className="border-2"></div>
                    </div>
            </div>
            <div className="contact" onClick={contact}>contacts<div className="part1-circle2"></div></div>
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
export default Part1;