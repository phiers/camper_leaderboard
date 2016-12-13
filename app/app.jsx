import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import Main from 'Main';

// Load foundation

$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <Main />,
    document.getElementById('app')); //eslint-disable-line
