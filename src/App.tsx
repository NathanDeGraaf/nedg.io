import * as React from 'react';
import DocumentTitle from 'react-document-title';
import './App.css';
import TopBar from './TopBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ProjectsPage from "./Projects/ProjectsPage";
import AboutMePage from "./About/AboutMePage";
import PhotosPage from "./Photos/PhotosPage";
import Circles from "./Circles";

class App extends React.Component {
  public render() {
    return (
      <DocumentTitle title={"Nathan De Graaf"}>
        <Router>
          <div>
            <TopBar/>
            <Route exact={true} path="/" component={Circles}/>
            <Route path={ProjectsPage.route} component={ProjectsPage}/>
            <Route path={AboutMePage.route} component={AboutMePage}/>
            <Route path={PhotosPage.route} component={PhotosPage}/>
          </div>
        </Router>
      </DocumentTitle>
    );
  }
}

export default App;
