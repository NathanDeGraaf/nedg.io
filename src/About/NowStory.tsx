import '../BasePage.css';
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import BaseStory from "../BaseStory";

export function item(category: string, value: string): JSX.Element {
  return (
    <Typography className="BaseStory-tx" component="h1">
      <b>{category}: </b> {value}
    </Typography>
  )
}

class NowStory extends BaseStory {
  protected title: string = "Now";
  protected coverImgage: string = require('./232620.png');
  protected body: JSX.Element[] = [
    item("Working", "Mobile Infrastructure team at Asana in San Francisco"),
    item("Reading", "The Art of Learning by Joshua Waitzkin"),
    item("Building", "This webpage to experiment with developing in typescript + react"),
    item("Playing", "Stardew valley"),
    item("Learning", "How to sport climb V8"),
  ];
}

export default NowStory;
