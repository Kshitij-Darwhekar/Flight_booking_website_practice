import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {SiAmericanairlines,SiDelta,SiSouthwestairlines} from 'react-icons/si';
import {AiOutlineMinus } from 'react-icons/ai';
import {MdFlightTakeoff,MdOutlineFlight} from 'react-icons/md';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function flights() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <h1 className='text-5xl text-white mb-5'>Flights Available</h1>
        
        {/* 1st Card */}
        
        <Card sx={{ minWidth: 275, marginY: 5, marginX: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14, marginBottom: 2 }} color="text.secondary" gutterBottom>
              Flight 1
            </Typography>
            <div className='flex gap-4 flex-row flex-grow '>
              <div className='flex flex-row justify-center items-center text-center gap-4 mb-4'>
                <SiAmericanairlines className='text-7xl text-purple-400'/>
                <Typography variant="h5" component="div">
                  American Airlines
                </Typography>
              </div>
              <div className='flex justify-center text-center items-center flex-col mx-80'>
                <div className='flex justify-center text-center items-center flex-row'>
                  <p className='text-2xl text-black  mt-2.5 mr-4'>Delhi</p>
                    <AiOutlineMinus className='text-3xl text-purple-300'/>
                    <MdOutlineFlight className='text-3xl text-purple-300 ' style={{transform: 'rotate(90deg)' }}/>
                  <p className='text-2xl text-black  mt-2.5 ml-4'>Mumbai</p>
                </div>
                <p className='text-2xl'>
                  Fare : 5000 Rs
                </p>
                <Button variant="contained" className='bg-primary-button text-white mt-5'>
                  Book Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2nd Card */}

        <Card sx={{ minWidth: 275, marginY: 5, marginX: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14, marginBottom: 2 }} color="text.secondary" gutterBottom>
              Flight 2
            </Typography>
            <div className='flex gap-4'>
              <div className='flex flex-row justify-center items-center text-center gap-4 mb-4'>
                <SiDelta className='text-7xl text-purple-400'/>
                <Typography variant="h5" component="div">
                  Delta Airlines
                </Typography>
              </div>
              <div className='flex justify-center text-center items-center flex-col mx-80'>
                <div className='flex justify-center text-center items-center flex-row'>
                  <p className='text-2xl text-black  mt-2.5 mr-4'>Delhi</p>
                    <AiOutlineMinus className='text-3xl text-purple-300'/>
                    <MdOutlineFlight className='text-3xl text-purple-300 ' style={{transform: 'rotate(90deg)' }}/>
                  <p className='text-2xl text-black  mt-2.5 ml-4'>Mumbai</p>
                </div>
                <p className='text-2xl'>
                  Fare : 5000 Rs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3rd Card */}

        <Card sx={{ minWidth: 275, marginY: 5, marginX: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14, marginBottom: 2 }} color="text.secondary" gutterBottom>
              Flight 3
            </Typography>
            <div className='flex gap-4'>
              <div className='flex flex-row justify-center items-center text-center gap-4 mb-4'>
                <SiSouthwestairlines className='text-7xl text-purple-400'/>
                <Typography variant="h5" component="div">
                  Southwest Airlines
                </Typography>
              </div>
              <div className='flex justify-center text-center items-center flex-col mx-80'>
                <div className='flex justify-center text-center items-center flex-row'>
                  <p className='text-2xl text-black  mt-2.5 mr-4'>Delhi</p>
                    <AiOutlineMinus className='text-3xl text-purple-300'/>
                    <MdOutlineFlight className='text-3xl text-purple-300 ' style={{transform: 'rotate(90deg)' }}/>
                  <p className='text-2xl text-black  mt-2.5 ml-4'>Mumbai</p>
                </div>
                <p className='text-2xl'>
                  Fare : 5000 Rs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4th Card */}

        <Card sx={{ minWidth: 275, marginY: 5, marginX: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14, marginBottom: 2 }} color="text.secondary" gutterBottom>
              Flight 4
            </Typography>
            <div className='flex gap-4'>
              <div className='flex flex-row justify-center items-center text-center gap-4 mb-4'>
                <SiAmericanairlines className='text-7xl text-purple-400'/>
                <Typography variant="h5" component="div">
                  American Airlines
                </Typography>
              </div>
              <div className='flex justify-center text-center items-center flex-col mx-80'>
                <div className='flex justify-center text-center items-center flex-row'>
                  <p className='text-2xl text-black  mt-2.5 mr-4'>Delhi</p>
                    <AiOutlineMinus className='text-3xl text-purple-300'/>
                    <MdOutlineFlight className='text-3xl text-purple-300 ' style={{transform: 'rotate(90deg)' }}/>
                  <p className='text-2xl text-black  mt-2.5 ml-4'>Mumbai</p>
                </div>
                <p className='text-2xl'>
                  Fare : 5000 Rs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5th Card */}
        <Card sx={{ minWidth: 275, marginY: 5, marginX: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14, marginBottom: 2 }} color="text.secondary" gutterBottom>
              Flight 5
            </Typography>
            <div className='flex gap-4'>
              <div className='flex flex-row justify-center items-center text-center gap-4 mb-4'>
                <SiAmericanairlines className='text-7xl text-purple-400'/>
                <Typography variant="h5" component="div">
                  American Airlines
                </Typography>
              </div>
              <div className='flex justify-center text-center items-center flex-col mx-80'>
                <div className='flex justify-center text-center items-center flex-row'>
                  <p className='text-2xl text-black  mt-2.5 mr-4'>Delhi</p>
                    <AiOutlineMinus className='text-3xl text-purple-300'/>
                    <MdOutlineFlight className='text-3xl text-purple-300 ' style={{transform: 'rotate(90deg)' }}/>
                  <p className='text-2xl text-black  mt-2.5 ml-4'>Mumbai</p>
                </div>
                <p className='text-2xl'>
                  Fare : 5000 Rs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
    </Box>
  );
}