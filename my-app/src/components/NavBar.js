import React from 'react';
import CustomLink from './CustomLink';

const menus = [
  {
    to: '/',
    exact: true,
    children: 'Home'
  },
  {
    to: '/post',
    exact: false,
    children: 'Post'
  }
];

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <ul className="nav navbar-nav">
            {this.showMenu(menus)}
          </ul>
        </div>
      </nav>
    );
  }
  showMenu = menus => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => (
        <CustomLink key={index} to={menu.to} exact={menu.exact} children={menu.children} />
      ))
    }
    return result;
  }
}