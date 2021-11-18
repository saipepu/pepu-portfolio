import React, { useState,useEffect } from 'react';
import './Home.css'
import Hero from './Hero/Hero';
import ProjectPage from './projectPage/projectPage';

const Home = () => {
    const [ cursorX, setCursorX ] = useState();
    const [ cursorY, setCursorY ] = useState();

    const mousemove = (e) => {
        console.log('hi')
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', mousemove)

        return () => {
            window.removeEventListener('mousemove', mousemove)
        }
        
    })
    return (
        <>
        <div className="home-container">
            <Hero />
            <ProjectPage />
            <div className="mouse-demo"
            style={{
                left: cursorX + 'px',
                top: cursorY + 'px'
            }}></div>
        </div>
        </>
    )
}
export default Home;