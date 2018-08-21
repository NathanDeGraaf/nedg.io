import BasePage from "../BasePage";
import ResumeStory from "./ResumeStory";
import CoverStory from "./CoverStory";
import WorkStory from "./WorkStory";
import NowStory from "./NowStory";

class AboutMePage extends BasePage {
  protected title: string = "About";
  protected arr = [
    { name: "", title: "-", story: CoverStory},
    { name: "/resume", title: "Resume", story: ResumeStory},
    { name: "/work", title: "Work Experience", story: WorkStory},
    { name: "/now", title: "Now", story: NowStory},
  ];
}

export default AboutMePage;
