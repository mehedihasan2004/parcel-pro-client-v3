import { Container } from '@mui/system';
import React from 'react';
import Partners from '../../home/Partners';
import LetsGetConnected from './LetsGetConnected';
import LetsMeetUs from './LetsMeetUs';

const ContactUs = () => {
  return (
    <Container>
    <LetsMeetUs/>
    <LetsGetConnected/>
    <Partners/>
    </Container>
  );
};

export default ContactUs;