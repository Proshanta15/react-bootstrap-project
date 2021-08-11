import React from 'react';
import Common from './Common';
import img2 from './images/about-img.png';

const About = () =>{
    return(
        <>
        <Common name="welcome to about page" imgsrc={img2} visit="/contact" btname="Contact Now" />
        </>
    )
}
export default About;