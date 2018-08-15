import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import './BasePage.css';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import BaseStory from './BaseStory'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {Link} from 'react-router-dom'
import CircleStory from "./CircleStory";
import RectangleStory from "./RectangleStory";

const Title = (x: string) => (
  <div>
    <Paper className="Page-title" elevation={0} square={true}>
      <Typography className="Header" variant="title" component="h3">
        {x}
      </Typography>
    </Paper>
  </div>
);
const MenuItem= (name: string, route: string) => (
  <ListItem button={true} divider={true}>
    <Link style={{textDecoration: "none", color: "white"}} to={route}><ListItemText primary={name}/></Link>
  </ListItem>
);

const Menu = () => (
  <div>
    <Paper className="Page-menu" elevation={0} square={true}>
      <List style={{padding: 0}} component="nav">
        {MenuItem("Inbox", "/projects/inbox")}
        {MenuItem("Asdf", "/projects/asdf")}
        {MenuItem("Circles", "/projects/circle")}
        {MenuItem("Rectangles", "/projects/rect")}
      </List>
    </Paper>
  </div>
);


class BasePage extends React.Component {
  public render() {
    return (
      <div>
        <Paper className="Page" elevation={2}>
          {Title("Projects")}
          <div className={"Page-body"}>
            <Menu/>

            <Router>
              <div className={"Page-story"}>
                <Route path="/projects/circle" component={CircleStory}/>
                <Route path="/projects/rect" component={RectangleStory}/>
                <Route path="/projects/3" component={BaseStory}/>
              </div>
            </Router>


          </div>
        </Paper>
      </div>
    );
  }
}

export default BasePage;
