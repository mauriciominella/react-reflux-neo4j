import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="fixed">
      <div className="nice-header-container">
        <h1 class="nice-header-brand">
          <a href="#">
            My Application
          </a>
        </h1>
      </div>
    </header>
  )
};

export default Header;