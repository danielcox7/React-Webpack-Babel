import React, { Component } from "react";

import '../styles/App.css';
import '../styles/Header.css';

class App extends React.Component {
    render() {
       return (
          <div>
             <Header/>
             <Pagetitle/>
          </div>
       );
    }
 }
 class Header extends React.Component {
    render() {
       return (
            <header id="header">Header</header>
       );
    }
 }

 class Pagetitle extends React.Component {
    render() {
       return (
          <h1>
            Page Title
          </h1>
       );
    }
 }

export default App;