import '../BasePage.css';
import {item} from "../BaseStory";
import BaseStory from "../BaseStory";

class NowStory extends BaseStory {
  protected title: string = "Now";
  protected body: JSX.Element[] = [
    item("Working", "Mobile Infrastructure team at Asana in San Francisco"),
    item("Reading", "The Art of Learning by Joshua Waitzkin"),
    item("Building", "This webpage to experiment with developing in typescript + react"),
    item("Playing", "Stardew valley"),
    item("Learning", "How to sport climb V8")
  ];
}

export default NowStory;
