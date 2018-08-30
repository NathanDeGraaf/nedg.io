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

export function h1(text: string): JSX.Element {
  return (
    <div className="BaseStory-h1">
      {text}
    </div>
  )
}

export function item(category: string, value: string): JSX.Element {
  return (
    <Typography className="BaseStory-tx" component="h1">
      <b>{category}: </b> {value}
    </Typography>
  )
}

export function im(src: string): JSX.Element {
  if(src !== undefined) {
    return (
      <div className="BaseStory-imgContainer">
        <img className="BaseStory-img" width="450" height="300" src={src}  />
      </div>
    )
  } else {
    return <div/>
  }
}

export const titleElement = (title: string) => {
  if(title !== "") {
    return (<div className="BaseStory-cover">
      <div className="BaseStory-title">
        <Typography variant="display3" component="h1">
          {title}
        </Typography>
      </div>
    </div>);
  } else {
    return <div/>
  }
};


abstract class BaseStory extends React.Component<{}, {}> {
  protected abstract title: string;
  protected body: any;
  public render() {
    return (
      <div className="BaseStory-body">
        {titleElement(this.title)}
        <div>
          {this.body}
        </div>
      </div>
    )
  }
}

export default BaseStory;
