import React from 'react';
import News from '../pages/NewsComponent';
import { NavLink } from 'react-router-dom';

const HeaderNavComponent = () => {
  return (
    <div className="flex items-center justify-between flex-wrap bg-indigo-400 hover:text-white p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavLink to="/news" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            <p className="text-base">новости</p>
          </NavLink>
        </div>
        <div className="text-sm lg:flex-grow">
          <NavLink to="/forum" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            <p className="text-base">форум</p>
          </NavLink>
        </div>
        <div className="text-sm lg:flex-grow">
          <NavLink to="/cinema" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            <p className="text-base">online cinema</p>
          </NavLink>
        </div>
        <div className="text-sm lg:flex-grow">
          <NavLink to="/sign-in" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            <p className="text-base">войти</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavComponent;
