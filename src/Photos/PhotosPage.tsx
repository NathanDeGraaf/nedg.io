import BasePage from "../BasePage";
import Photos2018Story from "./Photos2018Story";

class PhotosPage extends BasePage {
  public static route = "/photos";
  public route = PhotosPage.route;
  protected title: string = "Photos";
  protected arr = [
    { route_name: "/2018", title: "2018",  story: Photos2018Story},
    { route_name: "", story: Photos2018Story},
  ];
}

export default PhotosPage;
