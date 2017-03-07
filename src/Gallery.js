import React, { Component, PropTypes } from 'react';
import images from './images';
import './Gallery.css';

function Header(props) {
  return (
    <div>
      <nav>
        <a href='#' onClick={() => props.changeTab('thumbnail')}><li>Thumbnail</li></a>
        <a href='#' onClick={() => props.changeTab('fullsize')}><li>FullSize</li></a>
        <a href='#' onClick={() => props.changeTab('details')}><li>Details</li></a>
      </nav>
      <h4>Current view is: {props.tab}</h4> 
    </div>
  );
};

Header.propTypes = {
  tab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

const Image = (props) => {
  if (props.tab === 'thumbnail') {
    return (
      <div className='thumb'>
        <img src={props.image.src} alt={props.image.alt}/>
      </div>
    );
  } else if (props.tab === 'fullsize') {
    return (
      <div>
        <img src={props.image.src} alt={props.image.alt}/>
      </div>
    );
  } else if (props.tab === 'details') {
    return (
      <div>
        <ul>
          <li>"{props.image.alt}"</li>
          <li>{props.image.type}</li>
          <li>{props.image.src}</li>
        </ul>
      </div>
    );
  }
};

Image.propTypes = {
  tab: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'thumbnail',
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tabName) {
    this.setState({
      tab: tabName,
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Coach Eric Taylor Gallery</h1>
        <Header tab={this.state.tab} changeTab={this.changeTab}/>
        <div className='img-wrapper'>
          <Image tab={this.state.tab} image={images[0]}/>
          <Image tab={this.state.tab} image={images[1]}/>
          <Image tab={this.state.tab} image={images[2]}/>
        </div>
      </div> 
    );
  }
}

export default Gallery;
