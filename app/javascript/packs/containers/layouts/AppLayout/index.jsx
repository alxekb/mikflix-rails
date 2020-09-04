import React from 'react';
import { withRouter, BrowserRouter } from 'react-router-dom';
import AppComponent from '../../../components/AppComponent';

const AppLayout = () => {
  return (
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  );
};

export default AppLayout;
