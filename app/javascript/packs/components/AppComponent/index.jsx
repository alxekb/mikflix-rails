import React from 'react';
import HeaderComponent from '../HeaderComponent';
import MainComponent from '../MainComponent';
import FooterComponent from '../FooterComponent';
import '../../assets/tailwind.output.css';

const AppComponent = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </React.Fragment>
  );
}

export default AppComponent;
