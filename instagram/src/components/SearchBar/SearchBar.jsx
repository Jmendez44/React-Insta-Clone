import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IGLogo from '../../assets/iglogo.png';

import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import './SearchBar.css';

const SearchBar = () => {
    return (
      <div className="search-bar-wrapper">
        <div className="image-wrapper">
          <img alt="instagram logo" src={IGLogo} className="logo-image" />
        </div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="social-wrapper">
          <div className="social">
            <i className="fa fa-compass" />
          </div>
          <div className="social">
            <i className="fa fa-heart" />
          </div>
          <div className="social">
            <i className="fa fa-user-circle" />
          </div>
        </div>
      </div>
    );
  };

 
export default SearchBar;

