import BasePage from "../BasePage";
import ResumeStory from "./ResumeStory";
import CoverStory from "./CoverStory";
import WorkStory from "./WorkStory";

class AboutMePage extends BasePage {
  protected title: string = "About";
  protected arr = [
    { name: "", title: "Cover Letter", story: CoverStory},
    { name: "/resume", title: "Resume", story: ResumeStory},
    { name: "/work", title: "Work Experience", story: WorkStory},
  ];
}

export default AboutMePage;
