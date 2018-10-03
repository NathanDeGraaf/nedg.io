import '../BasePage.css';
import {h1, im, tx} from "../BaseStory";
import BaseStory from "../BaseStory";
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

export function pagePreview(link: string, name: string, src: string): JSX.Element {
  return (
    <Typography className="BaseStory-tx" component="h1">
      <Link to={link}>
        {h1(name)}
      </Link>
      <Link to={link}>
        {im(src,"ProjectStory-img")}
      </Link>
    </Typography>
  )
}

class ProjectsStory extends BaseStory {
  protected title: string = "Projects";
  protected body: JSX.Element[] = [
    tx("These are some of the projects I've undertaken ranging from research and classwork to random experiments. Drawing circles is a good place to start."),

    (<div>
      {pagePreview("/projects/circle","Drawing Circles",require("./ProjectsResources/circles.png"))}
    </div>),

    (<div>
      {pagePreview("/projects/rrl","Pattern Compression Algorithm (REU)",require("./ProjectsResources/rectangles.png"))}
    </div>),

    (<div>
      {pagePreview("/projects/chess","Chess Piece Classifier",require("./ProjectsResources/chess.png"))}
    </div>),
  ];
}

export default ProjectsStory;
