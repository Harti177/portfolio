import React from 'react'
import './styles.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Unity Developer",
          "Specialized in XR/VR"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text