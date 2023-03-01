import React from 'react';
import Lottie from 'react-lottie';
import motorCycle from '../assets/motorCyle.json';

const MotorbikeAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: motorCycle,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div>
            <Lottie options={defaultOptions}
                height={300}
                width={350}>
            </Lottie>
        </div>
    );
};

export default MotorbikeAnimation;