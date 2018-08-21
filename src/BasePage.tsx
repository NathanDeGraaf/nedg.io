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
// import CircleStory from "./CircleStory";
// import RectangleStory from "./RectangleStory";
// import ProjectsStory from "./ProjectsStory";
// import CoverStory from "./CoverStory";
// import BaseStory from "./BaseStory";

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
  route: string,
  target?: string,
  target_route?: string
}
const MenuItem: React.SFC<IMenuItemProps> = (props) => {
  const target = props.target;
  const route = props.target_route || props.route;
  return (<ListItem key={props.name} button={true} divider={true}>
    <Link style={{textDecoration: "none", color: "white"}} to={route} target={target}><ListItemText primary={props.name}/></Link>
  </ListItem>)
};



interface IStoryItem {
  name: string,
  title: string,
  story: any,
  target?: string,
  route?: string
}

interface IBaseProps extends RouteComponentProps<any> {}
abstract class BasePage extends React.Component<IBaseProps, {}> {
  protected title: string = "Projects";
  protected arr: IStoryItem[] = [
  ];
  public render() {
    return (
    <div>
      <Paper className="Page" elevation={2}>
        {Title(this.title)}
        <div className={"Page-body"}>
          {this.renderMenu()}
          <div className={"Page-story"}>
            {this.renderRoute()}
          </div>
        </div>
      </Paper>
    </div>
    )
  }

  protected renderRoute() {
    return (
      <div>
        {this.arr.map((x) => <Route key={x.toString()} exact={true} path={`${this.props.match.url}${x.name}`} component={x.story}/>)}
      </div>
    );
  }

  protected renderMenu() {
    return (
      <div>
        <Paper className="Page-menu" elevation={0} square={true}>
          <List style={{padding: 0}} component="nav">
            {this.arr.map((x) => MenuItem({
              name: x.title,
              route: `${this.props.match.url}${x.name}`,
              target: x.target,
              target_route: x.route
            }))}
          </List>
        </Paper>
      </div>
    );
  }
}

export default BasePage;
