import React from 'react';
import './project3.css';

const Project3 = () => {

    return(
        <>
        <div className="project1-container">
            <div className="project1-description-wrapper">
                <div className="project1-description-title">Fake Store e-commerce</div>
                <div className="project1-description-text">
                    This is an e-commerse site that I build using react react-redux and redux-thunk.You can choose the items that provided by the fake store API and it will lead you to the detail page of the item if you click on one of them.You can even add it to your cart and it will save it for you so that when you refresh the page the items that you selected in your cart will remain unchange.
                </div>
            </div>
            <div className="project1-role-wrapper">
                <div className="project1-role-title">Challenges</div>
                <div className="project1-role-text">
                    I've learnt a lot when I was doing this project as I was doing it all on my own. I often went through some hardship as I am also learning Chakra UI and implementing it at once while building this e-commerce site react app.
                </div>
            </div>
            <div className="project3-images-wrapper">
                <div className="img project3-image1"></div>
                <div className="img project3-image2"></div>
                <div className="img project3-image3"></div>
            </div>
            <div className="project1-source-code-wrapper">
                <div className="project1-source-code-title">Source Code</div>
                <div className="project-source-code-link"><a href="https://github.com/saipepu/ecommerce-site-v2" target="_blank" rel="noopener noreferrer" className="project-github-repo">visit github repo</a></div>
            </div>
            <div className="project1-site-link-wrapper">
                <div className="project1-site-title">visit</div>
                <div className="project-site-link"><a href="https://saipepu.github.io/ecommerce-site-v2/" target="_blank" rel="noopener noreferrer"className="project-github-link">visit live site</a></div>
            </div>
        </div>
        </>
    )
}
export default Project3;