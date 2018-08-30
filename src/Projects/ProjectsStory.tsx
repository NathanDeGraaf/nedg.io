import '../BasePage.css';
import {tx} from "../BaseStory";
import BaseStory from "../BaseStory";

class ProjectsStory extends BaseStory {
  protected title: string = "Projects";
  protected body: JSX.Element[] = [
    tx("These are some of the projects I've undertaken ranging from research and classwork to random experiments. Drawing Circles is a good place to start.")
  ];
}

export default ProjectsStory;
