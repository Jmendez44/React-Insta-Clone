import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../logo.svg';

import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import './SearchBar.css';



const SearchBar =  (props) => (
    <>
        <div className='sbContainer'>
            <div className="logo">
                <img src={require("./assets/instagram-logo-black-transparent.png")}/>
                <h3> INSTAGRAM </h3>
            </div>

            <Input placeholder="username" id="search" />

            <div className="icons">
                icons
            </div>
            
        </div>
    </>
)

 
export default SearchBar;

