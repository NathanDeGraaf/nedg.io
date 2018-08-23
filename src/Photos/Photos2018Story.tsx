import '../BasePage.css';
import BaseStory from "../BaseStory";
import * as React from 'react';


export function photo(src: string, id: string): JSX.Element {
  return (
    <a href={`https://www.flickr.com/photos/82900108@N06/${id}/`} target={"_blank"}>
      <div className="PhotoStory-imgContainer">
        <img className="PhotoStory-photo" src={src}  />
      </div>
    </a>
  )
}

class Photos2018Story extends BaseStory {
  protected title: string = "";
  protected body: JSX.Element[] = [
    <div key={"photos2018"} className="PhotoStory-row">
      {photo(
        "https://farm2.staticflickr.com/1845/30246869278_548f23cdb2_k.jpg",
        "30246869278"
      )}
      {photo(
        "https://farm2.staticflickr.com/1880/30246872678_55037f8a3e_k.jpg",
        "30246872678"
      )}
    </div>,
    <div key={"photos2018"} className="PhotoStory-row">
      {photo(
        "https://farm2.staticflickr.com/1899/42403798420_9b2692a15c_k.jpg",
        "42403798420"
      )}
      {photo(
        "https://farm2.staticflickr.com/1843/30344217998_ec75e231c8_k.jpg",
        "30344217998"
      )}
    </div>
  ];
}

export default Photos2018Story;
