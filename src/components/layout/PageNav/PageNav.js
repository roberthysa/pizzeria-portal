import React from 'react';
import { Link } from 'react-router-dom';

const PageNav = () => (
  <div>
    <nav>
      <Link exact to={`${process.env.PUBLIC_URL}/`}>Dashboard</Link>
      <Link to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
      <Link to={`${process.env.PUBLIC_URL}/Kitchen`}>Kitchen</Link>
      <Link to={`${process.env.PUBLIC_URL}/Tables`}>Tables</Link>
      <Link to={`${process.env.PUBLIC_URL}/Ordering`}>Ordering</Link>
    </nav>
  </div>
);

export default PageNav;
