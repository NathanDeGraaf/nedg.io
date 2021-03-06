import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import './BasePage.css';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Route,
  RouteComponentProps
} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Title = (value: string, route: string) => (
  <div>
    <Paper className="Page-title" elevation={0} square={true}>
      <Typography className="Header" variant="title" component="h3">
        <Link style={{textDecoration: "none"}} to={route}>{value}</Link>
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


  return (
    <Link className={target ? "mylink" : "nolink"} to={route} target={target}>
      <ListItem key={props.name}
                button={true}
                divider={true}>
        <ListItemText style={{padding: "0"}} primary={props.name}/>
      </ListItem>
    </Link>)
};



interface IStoryItem {
  route_name: string,
  title?: string,
  story: any,
  target?: string,
  route?: string
}

interface IBaseProps extends RouteComponentProps<any> {}
abstract class BasePage extends React.Component<IBaseProps, {}> {
  public route: string;
  protected title: string = "Projects";
  protected arr: IStoryItem[] = [
  ];
  public render() {
    return (
    <div>
      <Paper className="Page" elevation={2}>
        {Title(this.title, this.route)}
        <div className="Page-body">
          {this.renderMenu()}
          <div className="Page-story">
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
        {this.arr.map((x) => <Route key={x.toString()} exact={true} path={`${this.props.match.url}${x.route_name}`} component={x.story}/>)}
      </div>
    );
  }

  protected renderMenu() {
    return (
      <div>
        <Paper className="Page-menu" elevation={0} square={true}>
          <List style={{padding: 0}} component="nav">
            {this.arr.map((x) => {
              if(x.title === undefined) {
                return;
              } else {
                return MenuItem({
                  name: x.title,
                  route: `${this.props.match.url}${x.route_name}`,
                  target: x.target,
                  target_route: x.route
                })
              }
            })}
          </List>
        </Paper>
      </div>
    );
  }
}

export default BasePage;
