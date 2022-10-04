
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes, Route,}from "react-router-dom";
class App extends React.Component {
    render() {
      const data = [
        {
          "0": "www.google.com",
          "1": "Click here and enjoy searching",
          "2": "17"
        },
      ];
  
      return (
        <ul>
          {data.map(item => {
            return <li>{item[0]}</li>;
          })}
        </ul>
      );
    }
  }