import React from 'react';
import Lottie from 'react-lottie';
import deliveryBoy from '../assets/delivery-boy.json';

const DeliveryBoyAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: deliveryBoy,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            ></Lottie>
        </div>
    );
};

export default DeliveryBoyAnimation;