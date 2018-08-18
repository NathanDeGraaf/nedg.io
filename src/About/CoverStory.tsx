import '../BasePage.css';
import {tx} from "../BaseStory";
import BaseStory from "../BaseStory";

class CoverStory extends BaseStory {
  protected title: string = "Cover Story";
  protected body: JSX.Element[] = [
    tx("I'm a software engineer at Asana where I primarily work on the infrastructure and API for our mobile teams. " +
      "This website was created to be a place to share my projects and experiences in an open source fashion."),
    tx("I have a passion for building cool things and exploring difficult problems. " +
      "You'll find summaries of my technical projects summarized under my projects page. " +
      "They typically include algorithm design and implementation along with software design."),
    tx("I am also developing my appreciation for photography as I typically shoot around San Francisco. " +
      "The photos page includes my portfolio of work. ")
  ];
}

export default CoverStory;
