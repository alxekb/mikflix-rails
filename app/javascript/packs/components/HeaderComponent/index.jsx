import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../HeaderNavComponent';

const HeaderComponent = () => {
  return (
    <header className="header">
      <nav className="flex items-center justify-between flex-wrap bg-indigo-400 p-2">
        <NavLink
          to="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-indingo-200 hover:text-white mr-4"
        >
          <p className="text-lg">MIK</p>
        </NavLink>
        <Nav />
      </nav>
    </header>
  );
}

export default HeaderComponent;
