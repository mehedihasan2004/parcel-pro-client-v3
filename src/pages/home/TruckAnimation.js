import React, { useEffect, useRef } from 'react';
import { Box, } from '@mui/system';
import truck from '../../assets/track-run.jpg';
// import drone from '../assets/drone-delivery.png';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const TruckAnimation = () => {
    let blueBox = useRef(null)

    useEffect(() => {
        const myBox = blueBox.current;
        // console.log(myBox)
        gsap.to(myBox, {

            x: "100vw",
            duration: 4,
            scrollTrigger: {
                trigger: myBox,
                start: 'top center',
                // end: '30rem',
                scrub: 1,
                toggleActions: 'restart none none none',
                // markers: true
            },
        })
    }, [])
    return (
        <Box sx={{
            height: '30vh',
            width: '100vw',
            // background: 'gray'
        }}>
            <img ref={blueBox} src={truck} alt="truck" style={{width: '150px', paddingTop: '2rem'}}/>
            {/* <Box ref={blueBox} sx={{
                width: '120px',
                height: '100px',
                pt: '200px'
                // background: 'blue',
            }}>


            </Box> */}

            

        </Box>
    );
};

export default TruckAnimation;