import React from 'react';
import Common from './Common';
import img1 from './images/home-img.png';

const Home = () =>{
    return(
        <>
        <Common name="grow your business with" imgsrc={img1} visit="/service" btname="Get Started" />
        </>
    )
}
export default Home;