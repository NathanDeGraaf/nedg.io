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
    <div className="BaseStory-imgContainer">
      <img className="BaseStory-img" width="450" height="300" src={src}  />
    </div>
  )
}

export const titleElement = (title: string, img: string) =>
  <div className="BaseStory-cover">
    <div className="BaseStory-title">
      <Typography variant="display4" component="h1">
        {title}
      </Typography>
    </div>
    {im(img)}
  </div>;

abstract class BaseStory extends React.Component<{}, {}> {
  protected abstract title: string;
  protected coverImgage: string;
  protected body: any;
  public render() {
    return (
      <div style={{
        height: "100%",
        width: "800px"
      }}>
        {titleElement(this.title, this.coverImgage)}
        <div className="BaseStory-body">
          {this.body}
        </div>
      </div>
    )
  }
}

export default BaseStory;
