import React from 'react';
import { NavLink } from 'react-router';

function Button({ text }) {
  return (
    <>
      <div>
        <NavLink
          to="/"
          className="bg-red-500 text-white px-8 py-3 rounded-xl cursor-pointer font-semibold hover:bg-red-700 transition duration-150 delay-100 ease-in-out"
        >
          {text}
        </NavLink>
      </div>
    </>
  );
}

export default Button;
