import BasePage from "../BasePage";
import ResumeStory from "./ResumeStory";
import CoverStory from "./CoverStory";
import WorkStory from "./WorkStory";
import NowStory from "./NowStory";

class AboutMePage extends BasePage {
  public static route = "/about";
  public route = AboutMePage.route;
  protected title: string = "About";
  protected arr = [
    { route_name: "", story: CoverStory},
    { route_name: "/now", title: "Now", story: NowStory},
    { route_name: "/work", title: "Work Experience", story: WorkStory},
    { route_name: "/resume", title: "Resume", story: ResumeStory, target: "_blank", route: require('./resume.pdf')},
  ];
}

export default AboutMePage;
