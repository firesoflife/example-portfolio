import React from 'react';
import { Link } from 'react-router-dom';
import '../Sass/App.scss';

function Header() {
  return (
    <div>
      <header id="header-home">
        <div className="header-content">
          <div className="header-content__items">
            <h1 className="header-content__items--title">
              <span className="hello">Hello,</span> I'm Bryan: <br />
              <span className="title-span">
                Web Designer <span>|</span> Developer
              </span>
            </h1>
            <p className="header-content__items--tag">
              Have a poke around and take a look at some of my work
            </p>
            <a href="#projects" className="header-content__items--btn btn-main">
              <span>See My Work</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
