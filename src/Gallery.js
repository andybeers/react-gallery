import React, { Component } from 'react';

const Header = (tab) => {
  return (
    <div>
      <ul>
        <li>Thumbnail</li>
        <li>FullSize</li>
        <li>Details</li>
      </ul>
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
        <Header />
      </div> 
    );
  }
}

export default Gallery;
