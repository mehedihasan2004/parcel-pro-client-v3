import CallIcon from '@mui/icons-material/Call';
import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';

const TryCartogon = () => {
    return (
        <Paper sx={{
            display:'flex',
            justifyContent:'start',
            justifyItems:'center',
            height:'250px',
            backgroundColor:'#171717',
           p:6,
            color:'#ffffff',
            marginTop:8,
            marginBottom:8
        }}>
            <Box sx={{
                
            }}>
             <Typography variant="body1" gutterBottom>
         Contact
        </Typography>
             <Typography variant="h4" gutterBottom>
          Try Cartogon{" "}
          <span style={{ fontWeight: "bold", color: "yellow" }}>
            Today
          </span>
        </Typography>
            <p style={{
                 padding: "0px"
            }
            }>Do You Want A Fast Service? Just Call Us. We Are Now Serving Globally.</p>
            <Button variant="contained" style={{
                marginBottom:'15px',
            }}><CallIcon/>+8801601787266</Button>
        </Box>
        </Paper>
    );
};

export default TryCartogon;