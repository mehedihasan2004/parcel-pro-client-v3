import { Box } from '@mui/material';
import React from 'react';
import Sidebar from '../../components/Sidebar';





const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
               Dashboard home 
            </Box>
        </Box>
    );
};

export default Dashboard;