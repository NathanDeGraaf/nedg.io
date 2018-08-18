import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';
import {
  Link
} from 'react-router-dom'

class TopBar extends React.Component {
  public render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className="Topbar-toolbar">
            <Typography variant="title" color="inherit">
              <Link style={{textDecoration: "none", color: "white"}} to="/">nedg.io</Link>
            </Typography>
            <div className={"Topbar-buttons"}>
              <Button color="inherit">
                <Link style={{textDecoration: "none", color: "white"}} to="/projects">Projects</Link>
              </Button>
              <Button color="inherit">
                <Link style={{textDecoration: "none", color: "white"}} to="/photos">Photos</Link>
              </Button>
              <Button color="inherit">
                <Link style={{textDecoration: "none", color: "white"}} to="/about">About</Link>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar;
