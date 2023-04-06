import React from 'react'
import './styles.css';
import Text from './Text'
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Box } from '@mui/material';


function Home() {
  return (

                 <Box
      sx={{
        width: '100%',
        height: 400,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        display:'flex',
      }}
    >

         <Box
      sx={{
        width: '75%',
        height: 400,
        backgroundColor: '#000000',
      }}
    >
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Hariharasudhan Gunasekaran</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/Harti177");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/hariharasudhan-gunasekaran-513b4162/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
    </Box>
    </Box>

  )
}

export default Home