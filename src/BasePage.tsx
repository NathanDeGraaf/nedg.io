import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import './BasePage.css';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  // BrowserRouter as Router,
  Route,
  RouteComponentProps
} from 'react-router-dom'
import {Link} from 'react-router-dom'
import CircleStory from "./CircleStory";
import RectangleStory from "./RectangleStory";
import ProjectsStory from "./ProjectsStory";

const Title = (x: string) => (
  <div>
    <Paper className="Page-title" elevation={0} square={true}>
      <Typography className="Header" variant="title" component="h3">
        {x}
      </Typography>
    </Paper>
  </div>
);

interface IMenuItemProps {
  name: string,
  route: string
}
const MenuItem: React.SFC<IMenuItemProps> = (props) => (
  <ListItem button={true} divider={true}>
    <Link style={{textDecoration: "none", color: "white"}} to={props.route}><ListItemText primary={props.name}/></Link>
  </ListItem>
);

interface IMenuProps extends RouteComponentProps<any> {}
const Menu: React.SFC<IMenuProps> = (props) => (
  <div>
    <Paper className="Page-menu" elevation={0} square={true}>
      <List style={{padding: 0}} component="nav">
        {MenuItem({name: "Circles", route: `${props.match.url}/circle`})}
        {MenuItem({name: "Rectangles", route: `${props.match.url}/rect`})}
      </List>
    </Paper>
  </div>
);

interface IBaseProps extends RouteComponentProps<any> {}
const BasePage: React.SFC<IBaseProps> = (props) =>
      <div>
        <Paper className="Page" elevation={2}>
          {Title("Projects")}
          <div className={"Page-body"}>
            {Menu({...props})}
            <div className={"Page-story"}>
              <Route path={`${props.match.url}/circle`} component={CircleStory}/>
              <Route path={`${props.match.url}/rect`} component={RectangleStory}/>
              <Route exact={true} path={`${props.match.url}`} component={ProjectsStory}/>
            </div>
          </div>
        </Paper>
      </div>;

export default BasePage;
