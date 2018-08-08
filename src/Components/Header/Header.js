import React from 'react';
import logo from '../../logo.svg';
import Form from  '../Form/Form.js';

const Header = ({ updateList }) => {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome</h1>
            <h3>Create your shopping list</h3>
            <Form updateList={updateList} />
        </header>
    )
};

export { Header };