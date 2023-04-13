import * as React from 'react';
import { Component } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactPlayer from "react-player";
import "./Player.css";

const projects = [
    {
        url: 'https://live.staticflickr.com/65535/52813477093_3a0dacbcec_o.png',
        title: 'Factory Planning',
        description: 'VR application that allows for the design of factory and assembly line layouts which can later be used as a digital twin for planning and training.',
        year: '2020',
        type: 'Client Product',
        time: 0
    },
    {
        url: 'https://live.staticflickr.com/65535/52813476933_f06d918b81_o.png',
        title: 'Urban Planner',
        description: 'VR/Desktop multi-user application for Urban energy planning which includs creation of digital twins of cities automatically from Geodata.',
        year: '2021',
        type: 'Client Product',
        time: 127
    },
    {
        url: 'https://live.staticflickr.com/65535/52813220234_b8851aa73e_o.png',
        title: 'Social VR',
        description: 'Internal social VR application for organizing VR events in promoting & providing firsthand experience of Metaverse to executives & clients.',
        year: '2022',
        type: 'Internal Product',
        time: 29.75
    },
    {
        url: 'https://live.staticflickr.com/65535/52813023726_4812267cee_o.png',
        title: 'Immersive Learning Campus',
        description: 'Immersive campus for gamified learning for the employees of a client who is currently undergoing cloud migration to empower them digitally.',
        year: '2023',
        type: 'Client Product',
        time: 50.2
    },
    {
        url: 'https://live.staticflickr.com/65535/52813476983_08e6e33611_o.png',
        title: 'Handsfree Manual(Doc) Reader',
        description: 'Part of the AR guidance & training application to enhance the factories of an automobile client by integrating Microsoft Azure Cloud and Hololens.',
        year: '2022',
        type: 'Client Prototype',
        time: 107
    },  
   {
      url: 'https://live.staticflickr.com/65535/52813436945_2c1d3bca21_o.png',
      title: 'Collaborative Surgery Training',
      description: 'Multi-user VR remote surgery planning created which was successfully evaluated by neurosurgeons and being funded for Phd to extend developement.',
      year: '2019',
      type: 'Research Prototype',
      time: 84.5
    },
    {
        url: 'https://live.staticflickr.com/65535/52813220114_0189ebbddb_o.png',
        title: 'VR Data Exploration',
        description: 'Aneurysm data exploration in VR with interactive case-based reasoning and classification for desicion making and navigation planning for intracranial surgery.',
        year: '2020',
        type: 'Master Thesis',
        time: 147.75
    },
    {
        url: 'https://live.staticflickr.com/65535/52813011491_4fdf6c1e87_o.png',
        title: 'Virtual Thermo Lab',
        description: 'Android/Desktop application to simulate thermal experiments allowing more testing with less resources being used.',
        year: '2019',
        type: 'University Project',
        time: 167
    },
    {
      url: 'https://live.staticflickr.com/65535/52813436900_cfdd44d86b_o.png',
      title: 'Game Assistant Using ChatGPT',
      description: 'Prototype to use ChatGPT as a AI tutorial assitant for application and games by feeding the tutorial document to the model beforehand.',
      year: '2023',
      type: 'Personal Project',
      time: 120.50
    },
  ];
  
  class ProjectDetails extends Component{

    constructor(props) {
        super(props);
        this.player = React.createRef();
        this.state = {
          playing: false
        };
    }

    render (){
        return (
            <Box sx={{ width: '100%', background: "#696680"}}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {projects.map((item) => (
                    <Grid item xs={4} maxHeight={600} sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <Card sx={{ maxWidth: 400, background: '#000000'  }}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={item.url}
                                title={item.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color={"#ffffff"}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color={"#ffffff"}>
                                    {item.description}
                                </Typography>
                                <br />
                                <Typography variant="body2" color={"#ffffff"}>
                                    {item.type} ({item.year})
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" 
                                    onClick={() => {
                                        window. scrollTo(0,1800);
                                        this.player.current.seekTo(item.time);
                                        this.setState({ playing: true })
                                }}>
                                    Video
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}    
              </Grid>
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
            </Box>
          );
    }
}

export default ProjectDetails;