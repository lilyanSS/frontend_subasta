import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Carone from '../Assets/images/back2.jpg';
import ReactPlayer from 'react-player'
import Video from '../Assets/video/Auto.mp4'
export const Home = () => {
    // let data = [
    //     { "id": 1, img: Carone },
    //     { "id": 2, img: CarTwo },
    //     { "id": 3, img: ImgThree },
    // ]
    return (
        <div style={{ minHeight:'100vh',backgroundSize: "cover",backgroundImage:"url(" + Carone + ")"}}>
        </div>

    )
}