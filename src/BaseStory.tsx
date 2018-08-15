import * as React from 'react';
// import Typography from '@material-ui/core/Typography';
import './BasePage.css';
// import Paper from '@material-ui/core/Paper';

class BaseStory extends React.Component {
  protected x: string = "default";

  public render() {
    return (
      <div>
        {this.x}
      </div>
    );
  }
}

export default BaseStory;
