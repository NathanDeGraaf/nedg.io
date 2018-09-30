import '../BasePage.css';
import * as React from 'react';
import IBaseStory from "../BaseStory";
import {h1, tx} from "../BaseStory";
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

class CircleStory extends IBaseStory {
  protected title: string = "Chess Piece Classifier";
  protected body: JSX.Element[] = [
    h1("Results"),
    (
      <div className="BaseStory-imgContainer">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/c9L6tMx9tHA?autoplay=1&rel=0&playsinline=1&rate=2" frameBorder="0"
                data-allow="autoplay; encrypted-media" allowFullScreen={true}/>
      </div>
    ),
    h1("Problem Statement"),
    tx("Given only a video feed of a physical chess board, identify the location of the pieces and tabulate the game moves in real time."),

    h1("Details"),
    (
      <Link to={require('./ChessResources/DeGraafHonorsPoster.pdf')} target="_blank">
        {tx("Poster PDF")}
      </Link>
    ),

    h1("Source Code"),
    tx("This application is written in C++ using OpenCV libraries for video and image frame operations"),
    (<Typography className="BaseStory-tx" component="h1">
      <a href={"https://github.com/NathanDeGraaf/chess-sight"} target={"_blank"}>{"https://github.com/NathanDeGraaf/chess-sight"}</a>
    </Typography>)
  ];
}

export default CircleStory;
