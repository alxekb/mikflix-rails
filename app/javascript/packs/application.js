import React from 'react';
import { render } from 'react-dom';
import AppLayout from './containers/layouts/AppLayout';
import { BrowserRouter } from 'react-router-dom';

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require('@rails/ujs').start();
require('@rails/activestorage').start();
// require('channels');

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// import SampleComponent from '../packs/components/SampleComponent';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    );
  }

}
document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(<AppLayout />, container);
});
