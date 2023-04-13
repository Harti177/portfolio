import * as React from 'react';
import { Component } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = [
  {
    url: 'https://live.staticflickr.com/65535/52813477093_3a0dacbcec_o.png',
    title: 'Factory Planning',
    rows: 2,
    cols: 2,
  },
  {
    url: 'https://live.staticflickr.com/65535/52813220234_b8851aa73e_o.png',
    title: 'Social VR',
    rows: 1,
    cols: 2,
  },

  {
    url: 'https://live.staticflickr.com/65535/52813023726_4812267cee_o.png',
    title: 'Immersive Learning Campus',
    rows: 1,
    cols: 2,
  },
  {
    url: 'https://live.staticflickr.com/65535/52813436945_2c1d3bca21_o.png',
    title: 'Collaborative Surgery Training',
  },
  {
    url: 'https://live.staticflickr.com/65535/52813476983_08e6e33611_o.png',
    title: 'Handsfree Manual(Doc) Reader',
    rows: 1,
    cols: 2,
  },

  {
    url: 'https://live.staticflickr.com/65535/52813436900_cfdd44d86b_o.png',
    title: 'Game Assistant Using ChatGPT',
  },
  {
    url: 'https://live.staticflickr.com/65535/52813220114_0189ebbddb_o.png',
    title: 'VR Data Exploration',
  },
  {
    url: 'https://live.staticflickr.com/65535/52813476933_f06d918b81_o.png',
    title: 'Urban Planner',
    rows: 1,
    cols: 2,
  },
  {
    url: 'https://live.staticflickr.com/65535/52813011491_4fdf6c1e87_o.png',
    title: 'Virtual Thermo Lab',
  },
];

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

class ProjectThumbnails extends Component{
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
            <ImageList sx={{ width: 450, height: 450}} cols={4} rowHeight={100} variant="quilted"  gap={10}>
            {images.map((item) => (
                <ImageListItem key={item.url} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                    {...srcset(item.url, 100, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
        </div>
  );
}
}

export default ProjectThumbnails;