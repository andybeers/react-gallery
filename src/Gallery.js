import React, { Component, PropTypes } from 'react';

function Header(props) {
  return (
    <div>
      <ul>
        <a href='#' onClick={() => props.changeTab('thumbnail')}><li>Thumbnail</li></a>
        <a href='#' onClick={() => props.changeTab('fullsize')}><li>FullSize</li></a>
        <a href='#' onClick={() => props.changeTab('details')}><li>Details</li></a>
      </ul>
      <p>Current tab is: {props.tab}</p> 
    </div>
  );
};

Header.propTypes = {
  tab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

const Image = () => {
  return (
    <div>
      This is the image view.
    </div>
  );
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
        Gallery top level component here.
        <Header tab={this.state.tab} changeTab={this.changeTab}/>
        <Image />
      </div> 
    );
  }
}

export default Gallery;
