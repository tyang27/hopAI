import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES =
  [{
      src: require("./hophacks.jpg"),
      thumbnail: require("./hophacks.jpg"),
      thumbnailWidth: 320,
      thumbnailHeight: 212
  }]

class Lightbox extends Component {

  render() {
    return(
        <Gallery
          images={IMAGES}
          enableImageSelection={false}/>
        );
  }
}

export default Lightbox;
