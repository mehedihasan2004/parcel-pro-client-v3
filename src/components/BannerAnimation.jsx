import React from 'react';
import Lottie from 'react-lottie';
import doorAnimation from '../assets/door-delivery.json';

const BannerAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: doorAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={500}
                width={'100%'}
            ></Lottie>
        </div>
    );
};

export default BannerAnimation;