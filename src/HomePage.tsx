import * as React from 'react';
import './BasePage.css';
import {  Redirect } from 'react-router'

class HomePage extends React.Component {
  public render() {
    return (
        <Redirect to="/about"/>
    )
  }
}

export default HomePage;
