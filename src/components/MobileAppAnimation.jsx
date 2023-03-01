import React from 'react';
import Lottie from 'react-lottie';
import appAnimation from '../assets/mobile-app.json';

const MobileAppAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: appAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={500}
                width={400}
            ></Lottie>
        </div>
    );
};

export default MobileAppAnimation;