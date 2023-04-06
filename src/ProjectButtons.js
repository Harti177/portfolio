import * as React from 'react';
import { Component } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ReactPlayer from "react-player";
import "./Player.css";

const images = [
  {
    url: 'https://drive.google.com/uc?export=download&id=1RBngVf-qfQtJyd1QmgjaeqSIBYqgyvyt',
    title: 'Factory Planning',
    width: '25%',
    time: 0
  },
  {
    url: 'https://drive.google.com/uc?export=download&id=1S575HOFOYw4Q9n-9OrJxH2uwpoJZ6d_g',
    title: 'Social VR',
    width: '25%',
    time: 29.75
  },

  {
    url: 'https://drive.google.com/uc?export=download&id=1ZmlQ-7CHepv4K6cxEhN-jx8NxYEyw2_n',
    title: 'Immersive Learning Campus',
    width: '25%',
    time: 50.2
  },
  {
    url: 'https://drive.google.com/uc?export=download&id=1HzjCRVm-jDE0eYwVfLB0p8wC352HACEw',
    title: 'Collaborative Surgery Training',
    width: '25%',
    time: 84.5
  },
  {
    url: 'https://drive.google.com/uc?export=download&id=1MRY0gAPARnTvitZVA3zcxg1jaNoABuSt',
    title: 'Handsfree Manual(Doc) Reader',
    width: '20%',
    time: 107
  },

  {
    url: 'https://drive.google.com/uc?export=download&id=1PTJBA5aT7qcuUqN5sDDSXanCsqRG1i2I',
    title: 'Game Assistant Using ChatGPT',
    width: '20%',
    time: 120.50
  },
  {
    url: 'https://drive.google.com/uc?export=download&id=10WT5lqqYSsYGGlJxpJbdqLvfk-G1pcux',
    title: 'VR Data Exploration',
    width: '20%',
    time: 147.75
  },
  {
    url: 'https://drive.google.com/uc?export=download&id=1LuoI4C_wGZlRPDWHdcLq2YycrwTJU_RN',
    title: 'Urban Planner',
    width: '20%',
    time: 127
  },
  {
    url: 'https://drive.google.com/uc?export=download&id=1YPUmHnoW9siXo0u8qdjAcqNteqqPNLKP',
    title: 'Virtual Thermo Lab',
    width: '20%',
    time: 167
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

class ProjectButtons extends Component{
  constructor(props) {
    super(props);
    this.player = React.createRef();
    this.state = {
      playing: false
    };
  }

  render (){

  return (
    <div> 
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={() => {
            window. scrollTo(0,1600);
            this.player.current.seekTo(image.time);
            this.setState({ playing: true })
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
     <div className="player-wrapper">
      <ReactPlayer
            ref = {this.player}
            url='https://player.vimeo.com/video/814797483?h=0c1bb9be1e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            className='react-player'
            playing={this.state.playing}
            controls
            width="100%"
            height="100%"
            playsinline='true'
          />
    </div>
    </div>
  );
}
}

export default ProjectButtons;