'use client'

import React from "react"
import Lottie from "lottie-react"
import animation from "../animation/animation.json"


const LottieAnimation: React.FC = () => {

    return (
        <div >
            <Lottie animationData={animation} loop={true}/>
        </div>
    );
};

export default LottieAnimation