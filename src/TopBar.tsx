import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';

class Topbar extends React.Component {
  public render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className={"Topbar-toolbar"}>
            <Typography variant="title" color="inherit">
              nedg.io
            </Typography>
            <div className={"Topbar-buttons"}>
              <Button color="inherit" >Home</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Photos</Button>
              <Button color="inherit">Writing</Button>
              <Button color="inherit">About</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Topbar;
