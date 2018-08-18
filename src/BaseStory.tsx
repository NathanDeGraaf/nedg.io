import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import './BaseStory.css';

export function tx(text: string): JSX.Element {
  return (
  <Typography className="BaseStory-tx" component="h1">
    {text}
  </Typography>
  )
}

abstract class BaseStory extends React.Component<{}, {}> {
  protected abstract title: string;
  protected body: any;
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
        <div className="BaseStory-body">
          {this.body}
        </div>
      </div>
    )
  }
}

export default BaseStory;
