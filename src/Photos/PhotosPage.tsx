import BasePage from "../BasePage";
import Photos2018Story from "./Photos2018Story";

class PhotosPage extends BasePage {
  protected title: string = "Photos";
  protected arr = [
    { name: "/2018", title: "2018",  story: Photos2018Story},
  ];
}

export default PhotosPage;
