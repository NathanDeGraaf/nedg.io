import '../BasePage.css';
import {tx} from "../BaseStory";
import BaseStory from "../BaseStory";

class ResumeStory extends BaseStory {
  protected title: string = "Resume";
  protected body: JSX.Element[] = [
    tx("I'm a software engineer at Asana where I primarily work on the infrastructure and API for our mobile teams. " +
      "This website was created to be a place to share my projects and experiences in an open source fashion.")
  ];
}

export default ResumeStory;
