import React from 'react';
import Lottie from 'react-lottie';
import carAnimation from '../assets/carAnimation.json';

const CarCourier = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: carAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div>
            <Lottie options={defaultOptions}
                height={350}
                width={350}>
            </Lottie>
        </div>
    );
};

export default CarCourier;