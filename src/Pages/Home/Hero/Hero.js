import React,{useState} from 'react';
import './Hero.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

const Hero = () => {
    const [showContact, setShowContact] = useState(false);

    const contact = () => {
        setShowContact(!showContact);
    }
    const formClose = () => {
        setShowContact(!showContact);
    }
    return (
        <>
            <div className="hero-container">
                        {/* BIG TITLE */}
                <div className="title-wrapper">
                    <div className="title">
                        <div className="coder">CODER</div>
                        <div className="designer">DESIGNER</div>
                    </div>
                </div>
                        {/* TOP NAVIGATION */}
                <div className="top-nav-wrapper">
                    <div className="contact-btn-wrapper"
                            onClick={contact}>
                            <Button type="contact-btn">contact me</Button>
                    </div>
                    <Link to="/Aboutme">
                        <div className="aboutme-btn-wrapper">
                            <Button type="aboutme-btn">about me</Button>
                        </div>
                    </Link>
                    <div className="project-btn-wrapper">
                            <Button type="project-btn">projects</Button>
                    </div>
                </div>
                    {/* SUB TITLE */}
                <div className="subtitle-wrapper">
                    <div className="subtitle-text">
                        <p className="part-1-text">I am <span className="subtitle-pepu">PEPU</span>,
                        a frontend React js developer.</p>
                        <p>Designing and building websites that interact with users and enhance users experience.</p>
                    </div>
                </div>
                <div className="scroll-icon-wrapper">
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
        </div>
        </>
    )
}
export default Hero;