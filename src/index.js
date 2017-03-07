import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Galler';
import './index.css';

let app = <Gallery />;

ReactDOM.render(
  <div>
    {app}
  </div>,
  document.getElementById('root')
);
