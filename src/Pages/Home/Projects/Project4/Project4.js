import React from 'react';
import './project4.css';

const Project4 = () => {

    return(
        <>
        <div className="project1-container">
            <div className="project1-description-wrapper">
                <div className="project1-description-title">OMDB movie app</div>
                <div className="project1-description-text">
                    A movie app using OMDB API,where you can search literally any movie that had been published.Even ShangChi or Squat Game.I use Chakra UI and redux-thunk to build this web-app.The UI is not the best(in my opinion) as I spent most of the time to implement the tech that I've learn so far (like redux/redux-thunk/localStorage/hosting on gitHub pages/chakra UI and also the search bar that work!!!) all in one place rather that styling it pixel by pixel.
                </div>
            </div>
            <div className="project1-role-wrapper">
                <div className="project1-role-title">Challenges</div>
                <div className="project1-role-text">
                    Linking from page to page gave me headages but I was able figured it out.
                </div>
            </div>
            <div className="project4-images-wrapper">
                <div className="img project4-image1"></div>
                <div className="img project4-image2"></div>
                <div className="img project4-image3"></div>
            </div>
            <div className="project1-source-code-wrapper">
                <div className="project1-source-code-title">Source Code</div>
                <div className="project1-source-code-link"><a href="https://github.com/saipepu/movie-app-react" target="_blank" rel="noopener noreferrer" className="project-github-repo">visit github repo</a></div>
            </div>
            <div className="project1-site-link-wrapper">
                <div className="project1-site-title">visit</div>
                <div className="project1-site-link"><a href="https://saipepu.github.io/movie-app-react" target="_blank" rel="noopener noreferrer" className="project-github-repo">view live site</a>(View on desktop for a better look)</div>
            </div>
        </div>
        </>
    )
}
export default Project4;