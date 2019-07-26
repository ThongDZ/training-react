import React from 'react';
import {Route, Link} from "react-router-dom";

const CustomLink = ({to, exact, children}) => {
  return (
    <Route path={to} exact={exact} children={({ match }) => {
      let active = match ? 'active' : '';
      return (
        <li className={active}>
          <Link to={to} children={children}/>
        </li>
      )
    }}/>
  )
};

export default CustomLink;