import React from 'react';
import './project2.css';

const Project2 = () => {

    return(
        <>
        <div className="project1-container">
            <div className="project1-description-wrapper">
                <div className="project1-description-title">PRODUCITVITY App</div>
                <div className="project1-description-text">
                    This is the productivity app that I build using react js and redux.
                </div>
            </div>
            <div className="project1-role-wrapper">
                <div className="project1-role-title">Role</div>
                <div className="project1-role-text">
                    UI / UX designing, Web Developing, Researching, 
                    Probleming solving...
                </div>
            </div>
            <div className="project2-images-wrapper">
                <div className="img project2-image1"></div>
                <div className="img project2-image2"></div>
            </div>
            <div className="project1-source-code-wrapper">
                <div className="project1-source-code-title">Source Code</div>
                <div className="project-source-code-link">
                    <a href="https://github.com/saipepu/productivity-app/deployments/activity_log?environment=github-pages" target="_blank" rel="noopener noreferrer" className="project-github-repo">github repo</a>
                </div>
            </div>
            <div className="project1-site-link-wrapper">
                <div className="project1-site-title">visit</div>
                <div className="project-site-link">
                    <a href="https://saipepu.github.io/productivity-app/" target="_blank" rel="noopener noreferrer" className="project-github-link">github page link</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Project2;