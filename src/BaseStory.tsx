import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import './BaseStory.css';

abstract class IBaseStory extends React.Component<{}, {}> {
  protected abstract title: string;
  public render() {
    return (
      <div style={{
        height: "100%",
        width: "800px"
      }}>
        <Typography variant="display3" component="h1">
          <div className="BaseStory-title">
            {this.title}
          </div>
        </Typography>
      </div>
    )
  }
}

export default IBaseStory;
