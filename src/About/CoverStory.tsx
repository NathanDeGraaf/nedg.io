import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import '../BasePage.css';
import {im, tx} from "../BaseStory";
import BaseStory from "../BaseStory";

class CoverStory extends BaseStory {
  protected title: string = "About";
  protected body: JSX.Element[] = [
    tx("I'm a software engineer at Asana where I primarily work on the infrastructure and API for our mobile teams. " +
      "This website was created to be a place to share my projects and experiences in an open source fashion."),
    (<Typography className="BaseStory-tx" component="h1">
      {"I have a passion for building cool things and exploring difficult problems. " +
      "You'll find summaries of my technical projects summarized under my "}
      <a href={"/projects"}>{"projects"}</a>
      {" page. They typically include algorithm design and implementation along with software design."}
    </Typography>),
    (<Typography className="BaseStory-tx" component="h1">
      {"In my free time, I enjoy sport bouldering, ballroom dancing, and taking "}
      <a href={"/photos"}>{"photographs"}</a>
      {" of the places I visit."}
    </Typography>),
    im("https://farm2.staticflickr.com/1891/30268900248_f96b9c77b0_k.jpg")
  ];
}

export default CoverStory;
