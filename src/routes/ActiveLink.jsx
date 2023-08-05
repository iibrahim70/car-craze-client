import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
  return (
    <NavLink to={to} className={({ isActive }) =>
      isActive ? "text-blue-600 font-semibold" : "text-[#212121]"}>
      {children}
    </NavLink>
  );
};

export default ActiveLink;