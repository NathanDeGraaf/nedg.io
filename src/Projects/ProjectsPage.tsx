import BasePage from "../BasePage";
import CircleStory from "./CircleStory";
import ProjectsStory from "./ProjectsStory";
import RectangleStory from "./RectangleStory";
import ChessStory from "./ChessStory";

class ProjectsPage extends BasePage {
  public static route = "/projects";
  public route = ProjectsPage.route;
  protected title: string = "Projects";
  protected arr = [
      { route_name: "/circle", title: "Drawing Circles",  story: CircleStory},
      { route_name: "/rrl", title: "Pattern Compression Algorithm (REU)",  story: RectangleStory},
      { route_name: "/chess", title: "Chess Piece Classifier",  story: ChessStory},
    { route_name: "", story: ProjectsStory},
  ];
}

export default ProjectsPage;
