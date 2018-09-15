import React, { Component } from 'react';
import { Lightbox } from 'react-images';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      lightboxIsOpen: true
    }
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }
  gotoPrevious() {
     //....body here
  }
  gotoNext() {
    //..body here
  }
  closeLightbox() {
    //..body here
  }
  render() {
    return(
        <Lightbox
          images={[
            {src:'./hophacks.jpg'}
          ]}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          onClose={this.closeLightbox}
        />
    );
  }
}

export default Gallery;
