import BasePage from "../BasePage";
import CircleStory from "./CircleStory";
import RectangleStory from "./RectangleStory";

class ProjectsPage extends BasePage {
  protected title: string = "Projects";
  protected arr = [
    { name: "/circle", title: "Drawing Circles",  story: CircleStory},
    { name: "/rect",  title: "Rectangle Research", story: RectangleStory},
  ];
}

export default ProjectsPage;
