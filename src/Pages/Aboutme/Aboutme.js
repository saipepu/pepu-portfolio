import React from 'react';
import './Aboutme.css';
import Part1 from './Part1/Part1';
import Part2 from './Part2/Part2';
import Part3 from './Part3/Part3';

const Aboutme = () => {

    return(
        <>
            <div className="aboutme-page-container">
                <Part1 />
                <Part2 />
                <Part3 />
            </div>
        </>
    )
}
export default Aboutme;