import React from 'react';
import './project1.css';

const Project1 = () => {

    return(
        <>
        <div className="project1-container">
            <div className="project1-description-wrapper">
                <div className="project1-description-title">Food Finder App</div>
                <div className="project1-description-text">
                    This is a Cooking App that I built using themealdb food finder api. In this app,you can find food from different area around the world that provide in the category section.When you can find the food you like,you can just click on it and it will bring you to the recipe section where you can read the instructions and even watch youtube video to make it and enjoy your meal.
                </div>
            </div>
            <div className="project1-role-wrapper">
                <div className="project1-role-title">Role</div>
                <div className="project1-role-text">
                    As a UI/UX designer and Web Developer,I designed and built this from scratch.I encountered some api fetching problems,but as a freelancer,I made study and make a lot of research to come out with a unique design and fully functional App. 
                </div>
            </div>
            <div className="project1-images-wrapper">
                    <div className="img project1-image1"></div>
                    <div className="img project1-image2"></div>
                    <div className="img project1-image3"></div>
                    <div className="img project1-image4"></div>
            </div>
            <div className="project1-source-code-wrapper">
                <div className="project1-source-code-title">Source Code</div>
                <div className="project-source-code-link"><a href="https://github.com/saipepu/food-recipes-app" target="_blank" rel="noopener noreferrer" className="project-github-repo">visit github repo</a></div>
            </div>
            <div className="project1-site-link-wrapper">
                <div className="project1-site-title">Visit Site</div>
                <div className="project-site-link"><a href="https://saipepu.github.io/food-recipes-app/" target="_blank" rel="noopener noreferrer"className="project-github-link">on_github</a></div>
            </div>
        </div>
        </>
    )
}
export default Project1;