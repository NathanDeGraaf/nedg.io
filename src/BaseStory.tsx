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

export function im(src: string): JSX.Element {
  return (
    <img className="BaseStory-img" src={src} width="450" height="300" />
  )
}

export const titleElement = (title: string) =>
  <Typography variant="display2" component="h1">
    <div className="BaseStory-title">
      {title}
    </div>
  </Typography>;

abstract class BaseStory extends React.Component<{}, {}> {
  protected abstract title: string;
  protected body: any;
  public render() {
    return (
      <div style={{
        height: "100%",
        width: "800px"
      }}>
        {/*{titleElement(this.title)}*/}
        <div className="BaseStory-body">
          {this.body}
        </div>
      </div>
    )
  }
}

export default BaseStory;
