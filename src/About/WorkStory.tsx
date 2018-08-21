import '../BasePage.css';
import {tx} from "../BaseStory";
import BaseStory from "../BaseStory";

class WorkStory extends BaseStory {
  protected title: string = "Background";
  // protected coverImgage: string = require('./232620.png');
  protected body: JSX.Element[] = [
    tx("I'm a software engineer at Asana where I primarily work on the infrastructure and API for our mobile teams. " +
      "This website was created to be a place to share my projects and experiences in an open source fashion.")
  ];
}

export default WorkStory;
