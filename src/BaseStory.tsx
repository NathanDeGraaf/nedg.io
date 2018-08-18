import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import './BaseStory.css';

abstract class BaseStory extends React.Component<{}, {}> {
  protected abstract title: string;
  protected body: string;
  public render() {
    return (
      <div style={{
        height: "100%",
        width: "800px"
      }}>
        <Typography variant="display2" component="h1">
          <div className="BaseStory-title">
            {this.title}
          </div>
        </Typography>
        <Typography component="h1">
          <div className="BaseStory-body">
            {this.body}
          </div>
        </Typography>
      </div>
    )
  }
}

export default BaseStory;
