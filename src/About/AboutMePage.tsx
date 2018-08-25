import BasePage from "../BasePage";
import ResumeStory from "./ResumeStory";
import CoverStory from "./CoverStory";
import WorkStory from "./SiteStory";
import NowStory from "./NowStory";

class AboutMePage extends BasePage {
  public static route = "/about";
  public route = AboutMePage.route;
  protected title: string = "About";
  protected arr = [
    { route_name: "", story: CoverStory},
    { route_name: "/now", title: "Now", story: NowStory},
    { route_name: "/info", title: "This site", story: WorkStory},
    { route_name: "/resume", title: "Resume", story: ResumeStory, target: "_blank", route: require('./resume.pdf')},
  ];
}

export default AboutMePage;
