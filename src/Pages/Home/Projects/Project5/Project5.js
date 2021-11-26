import React from 'react';
import './project5.css';

const Project5 = () => {

    return(
        <>
        <div className="project1-container">
            <div className="project1-description-wrapper">
                <div className="project1-description-title">Weather App</div>
                <div className="project1-description-text">
                    This is a simple weather forecasting app using react-redux.You can search over 200,00 cities by typing name of the city in the search box.
                </div>
            </div>
            <div className="project1-role-wrapper">
                <div className="project1-role-title">Challenges</div>
                <div className="project1-role-text">
                    I am still trying to provide the weather forecasting data of any of the user's current location.
                </div>
            </div>
            <div className="project5-images-wrapper">
                <div className="img project5-image1"></div>
                <div className="img project5-image2"></div>
                <div className="img project5-image3"></div>
            </div>
            <div className="project1-source-code-wrapper">
                <div className="project1-source-code-title">Source Code</div>
                <div className="project-source-code-link">
                    <a href="https://github.com/saipepu/weather-app-react" target="_blank" rel="noopener noreferrer" className="project-github-repo">github repo</a>
                </div>
            </div>
            <div className="project1-site-link-wrapper">
                <div className="project1-site-title">visit</div>
                <div className="project-site-link">
                    <a href="https://saipepu.github.io/weather-app-react/" target="_blank" rel="noopener noreferrer" className="project-github-link">visit live site</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Project5;