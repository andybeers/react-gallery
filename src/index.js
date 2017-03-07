import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import './index.css';

let app = <Gallery />;

ReactDOM.render(
  <div>
    {app}
  </div>,
  document.getElementById('root')
);
