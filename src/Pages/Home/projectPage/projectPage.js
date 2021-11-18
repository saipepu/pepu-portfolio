import React, { useState } from 'react';
import './projectPage.css';
import './projectshowcase.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Project1 from '../Projects/Project1/project1';
import Project2 from '../Projects/Project2/project2';
import Project3 from '../Projects/Project3/project3';
import Project4 from '../Projects/Project4/Project4';
import Project5 from '../Projects/Project5/Project5';
import Project6 from '../Projects/Project6/Project6';

const ProjectPage = () => {
    const [activeMenu, setActiceMenu] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showCase1, setShowCase1] = useState(false)
    const [showCase2, setShowCase2] = useState(false)
    const [showCase3, setShowCase3] = useState(false)
    const [showCase4, setShowCase4] = useState(false)
    const [showCase5, setShowCase5] = useState(false)
    const [showCase6, setShowCase6] = useState(false)


    const onClick = () => {
        setActiceMenu(!activeMenu)
    }
    const contact = () => {
        setShowContact(!showContact);
    }
    const formClose = () => {
        setShowContact(false);
    }
    const ShowCase1 = () => {
        setShowCase1(!showCase1)
    }
    const ShowCase2 = () => {
        setShowCase2(!showCase2)
    }
    const ShowCase3 = () => {
        setShowCase3(!showCase3)
    }
    const ShowCase4 = () => {
        setShowCase4(!showCase4)
    }
    const ShowCase5 = () => {
        setShowCase5(!showCase5)
    }
    const ShowCase6 = () => {
        setShowCase6(!showCase6)
    }

    return(
        <>
        <div className="projectPage-container">
            {/* NAV BAR */}
            <div className="pp-nav-wrapper">
                <div className="logo">PEPU</div>
                    <div className="menu" onClick={onClick}>
                        <div className={activeMenu ? "menu-bar bar1-active" : "menu-bar bar1"}></div>
                        <div className={activeMenu ? "menu-bar bar2-active" : "menu-bar bar2"}></div>
                        <div className={activeMenu ? "menu-bar bar3-active" : "menu-bar bar3"}></div>
                    </div>
                <div className="pp-nav-container">
                    <div className="pp-nav">
                        <div className={activeMenu ? "pp-contact-btn-wrapper-active" : "pp-contact-btn-wrapper"}
                            onClick={contact}>
                            <Button type="contact-btn">contact me</Button>
                        </div>
                        <Link to="/Aboutme">
                            <div className={activeMenu ? "pp-aboutme-btn-wrapper-active" : "pp-aboutme-btn-wrapper"}>
                                <Button type="aboutme-btn">about me</Button>
                            </div>
                        </Link>
                        <div className={activeMenu ? "pp-project-btn-wrapper-active" : "pp-project-btn-wrapper"}>
                                    <Button type="project-btn">projects</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* PROJECTS SHOW CASE */}
            <div className="projects-sc-wrapper">
            <div className="card-space-holder"></div>
                <div className="project-card project-1-wrapper" onClick={ShowCase1}>
                    <div className="project-demo">
                        <div className="side-bar"></div>
                        <div className="circle"></div>
                        <div className="side-bar"></div>
                    </div>
                </div>
                <div className="project-card project-2-wrapper" onClick={ShowCase2}>
                    <div className="project-demo">
                        <div className="side-bar"></div>
                        <div className="circle"></div>
                        <div className="side-bar"></div>
                    </div>
                </div>
                <div className="project-card project-3-wrapper" onClick={ShowCase3}>
                    <div className="project-demo">
                        <div className="side-bar"></div>
                        <div className="circle"></div>
                        <div className="side-bar"></div>
                    </div>
                </div>
                <div className="project-card project-4-wrapper" onClick={ShowCase4}>
                    <div className="project-demo">
                        <div className="side-bar"></div>
                        <div className="circle"></div>
                        <div className="side-bar"></div>
                    </div>
                </div>
                <div className="project-card project-5-wrapper" onClick={ShowCase5}>
                    <div className="project-demo">
                        <div className="side-bar"></div>
                        <div className="circle"></div>
                        <div className="side-bar"></div>
                    </div>
                </div>
                <div className="project-card project-6-wrapper" onClick={ShowCase6}>
                    <div className="project-demo">
                        <div className="side-bar"></div>
                        <div className="circle"></div>
                        <div className="side-bar"></div>
                    </div>
                </div>
                <div className="card-space-holder"></div>
            </div>
            {/* FOOTER */}
            <div className="footer">
                <div className="links-wrapper">
                    <div className="links-title"><div className="line">Reach me through</div></div>
                    <div className="links">
                        <div className="instagram">instagram</div>
                        <div className="github">github</div>
                        <div className="linkedin">LinkedIn</div>
                        <div className="email">e-mail</div>
                    </div>
                </div>
                <div className="copyright-text-wrapper">
                    <div className="copyright-text">
                        This portfolio website is build with React.js by PEPU.<br/>
                        All copyright reservced.background-image from unsplash.
                    </div>
                </div>
            </div>
            {/* FORM */}
            <div className={showContact ? "form-bg": "form-bg-hide"}></div>

            <div className={showContact ? "form-wrapper-active" : "form-wrapper-hide"}>
                <div className="form-close" onClick={formClose}>
                        <div className="form-bar formbar1-active"></div>
                        <div className="form-bar formbar2-active"></div>
                        <div className="form-bar formbar3-active"></div>
                </div>
                    <Form />
            </div>
            {/*PROJECT 1 */}
            <div className={showCase1 ? "project1-show-case" : "hide"}>
                <div className="back-arrow" onClick={ShowCase1}>
                    <div className="back-arrow1" ></div>
                    <div className="back-arrow2" ></div>
                </div>
                <Project1 />
                
            </div>
            {/*PROJECT 2 */}
            <div className={showCase2 ? "project1-show-case" : "hide"}>
                <div className="back-arrow" onClick={ShowCase2}>
                    <div className="back-arrow1" ></div>
                    <div className="back-arrow2" ></div>
                </div>
                <Project2 />
              
            </div>
            {/*PROJECT 3 */}
            <div className={showCase3 ? "project1-show-case" : "hide"}>
                <div className="back-arrow" onClick={ShowCase3}>
                    <div className="back-arrow1" ></div>
                    <div className="back-arrow2" ></div>
                </div>
                <Project3 />
                
            </div>
            {/*PROJECT 4 */}
            <div className={showCase4 ? "project1-show-case" : "hide"}>
                <div className="back-arrow" onClick={ShowCase4}>
                    <div className="back-arrow1" ></div>
                    <div className="back-arrow2" ></div>
                </div>
                <Project4 />
                
            </div>
            {/*PROJECT 5 */}
            <div className={showCase5 ? "project1-show-case" : "hide"}>
                <div className="back-arrow" onClick={ShowCase5}>
                    <div className="back-arrow1" ></div>
                    <div className="back-arrow2" ></div>
                </div>
                <Project5 />
              
            </div>
            {/*PROJECT 6 */}
            <div className={showCase6 ? "project1-show-case" : "hide"}>
                <div className="back-arrow" onClick={ShowCase6}>
                    <div className="back-arrow1" ></div>
                    <div className="back-arrow2" ></div>
                </div>
                <Project6 />
                
            </div>
        </div>
        </>
    )
}
export default ProjectPage;