import BasePage from "../BasePage";
import CircleStory from "./CircleStory";
// import RectangleStory from "./RectangleStory";
import ProjectsStory from "./ProjectsStory";
import RectangleStory from "./RectangleStory";

class ProjectsPage extends BasePage {
  public static route = "/projects";
  public route = ProjectsPage.route;
  protected title: string = "Projects";
  protected arr = [
      { route_name: "/circle", title: "Drawing Circles",  story: CircleStory},
      { route_name: "/rrl", title: "Pattern Compression (REU)",  story: RectangleStory},
    // { route_name: "/rect",  title: "Rectangle Research", story: RectangleStory},
    { route_name: "", story: ProjectsStory},
  ];
}

export default ProjectsPage;
