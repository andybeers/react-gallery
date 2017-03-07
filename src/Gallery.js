import React, { Component, PropTypes } from 'react';
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

const imageObj = {
  src: 'https://thoughtcatalog.files.wordpress.com/2013/09/fnllll.png?w=584&h=478',
  alt: 'Coach Taylor on the Panthers field',
  type: 'PNG',
};

const imageObj2 = {
  src: 'http://www.texasmonthly.com/wp-content/uploads/2015/09/coach-taylor-rain.jpg',
  alt: 'Coach Taylor in the rain on the sidelines',
  type: 'JPG',
};

const imageObj3 = {
  src: 'http://4.bp.blogspot.com/-VMuqcFIUbe4/UNpA2FE5c5I/AAAAAAAAAFw/rw6YL6rP7hc/s1600/coach+t+with+the+lions.jpg',
  alt: 'Coach Taylor frowns in the Lions locker room',
  type: 'JPG',
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
          <Image tab={this.state.tab} image={imageObj}/>
          <Image tab={this.state.tab} image={imageObj2}/>
          <Image tab={this.state.tab} image={imageObj3}/>
        </div>
      </div> 
    );
  }
}

export default Gallery;
