import React from 'react'
import './Home.css';
import Text from './Text'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Box, colors } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import ProjectThumbnails from './ProjectThumbnails';

function Home() {
  return (
    <Carousel
      next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
      prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
      navButtonsAlwaysVisible="true"
      autoPlay="false"
      indicatorContainerProps={{
        style: {
          backgroundColor:'#000',
          marginTop:'0px'
        }

    }}
    >
      <Paper>
        <Box
          sx={{
            width: '100%',
            height: 600,
            backgroundColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            display:'flex',
          }}
        >
          <Box
            sx={{
              width: '12%',
              height: 600,
              backgroundColor: '#000000',
             }}
          >
          </Box>            
          <Box
            sx={{
              width: '40%',
              height: 400,
              backgroundColor: '#000000',
             }}
          >
                <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
                <h2 className='nametext'>I'm Hariharasudhan Gunasekaran</h2>
                <span></span>
                <Text />
                <button 
                  onClick={() => { window.open("https://github.com/Harti177");}} 
                  className='socailmediabtn'><AiFillGithub className='icon' />
                </button>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button onClick={() => { window.open("https://www.linkedin.com/in/hariharasudhan-gunasekaran-513b4162/");}}
                  className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
          </Box>
          <Box
            sx={{
              width: '36%',
              height: 500,
              backgroundColor: '#000000',
             }}
          >
                  <ProjectThumbnails />
          </Box>
          <Box
            sx={{
              width: '12%',
              height: 600,
              backgroundColor: '#000000',
             }}
          >
          </Box>          
        </Box>
      </Paper>     
      <Paper>
        <Box
          sx={{
            width: '100%',
            height: 600,
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
              <h2 className='headtext'>About</h2>
              <h2 className='abouttext'>
                Unity Developer with over 5 years of experience in developing XR applications for enterprise and research purposes, I am well-versed in Unity3D and C#. My work has involved creating planning tools, training applications and simulations across a range of industries including industrial, urban planning, and medical fields. I am deeply passionate about the potential of XR to revolutionize how industries operate and am committed to contributing to its widespread adoption. 
                <br /><br />
                I am deeply interested in game development and actively pursue it as a hobby. Prior to my current work, I served as a System Engineer at TCS where I contributed to the migration of premium entry systems from mainframe to Java for an insurance client based in the USA.
              </h2>
          </Box>
        </Box>
      </Paper>   
      <Paper>
        <Box
          sx={{
            width: '100%',
            height: 600,
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
              <h2 className='headtext'>Skills</h2>
              <h2 className='abouttext'>
              <ul>
                <li>Proficient: C#, Unity 3D engine</li>
                <li>Gameplay programming, Environment & Level Design, Lighting, Avatar, Animation, Physics, UI/UX, Zenject</li>
                <li>SME: Virtual Reality (VR), Augmented Reality (AR), Mixed Reality (MR)</li>
                <li>Devices: Meta Quest, Microsoft Hololens, HTC Vive, Pico</li>
                <li>SDK’s: Oculus Integration SDK (Interaction, Hand tracking, Meta Avatar, Passthrough, Space Sense)</li>
                <li>SDK’s: Mixed Reality Toolkit (MRTK 2.x and 3.0), Unity XR Interaction Toolkit, ARCore, SteamVR, VRTK, Photon</li>
                <li>Microsoft: Azure Cloud, Power Platform, SharePoint Framework (SPFx), Office365</li>
                <li>Design: Blender, Figma</li>
                <li>HandsOn: Unreal, OpenAI, Java, Javascript, SprintBoot, ReactJS, Android, RestApi, MaterialUI, ThreeJS, D3, HTML, CSS, Git</li>
              </ul>
              </h2>
          </Box>
        </Box>
      </Paper>             
    </Carousel>
  )
}

export default Home