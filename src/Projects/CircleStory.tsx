import '../BasePage.css';
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import IBaseStory from "../BaseStory";
import {h1, im, tx} from "../BaseStory";

class CircleStory extends IBaseStory {
  protected title: string = "Drawing Circles";
  protected body: JSX.Element[] = [
    h1("Results"),
    (<Typography className="BaseStory-tx" component="h1">
      <a href={"http://www.nedg.io/circles.html"}>{"http://nedg.io/circles.html"}</a>
    </Typography>),

    h1("Problem Statement"),
    tx("Given three tangent circles, compute a new circle tangent to all three circles."),
    im(require('./CircleImages/untitled1.png')),

    h1("Our solution"),
    tx("We simplify the problem to finding a circle tangent two of the circles and a point on one of the circles. " +
      "By moving the point around our circle, we can effectively binary search for our desired circle."),
    im(require('./CircleImages/untitled21.png')),

    h1("Finding the circle tangent to two circles and a point on one circle:"),
    im(require('./CircleImages/untitled31.png')),
    (<Typography className="BaseStory-tx" component="h1">
      Given circles at (x<sub>1</sub>, y<sub>1</sub>) and (x<sub>2</sub>, y<sub>2</sub>) with radii r<sub>1</sub> and r<sub>2</sub> and a point at (p<sub>1</sub>, p<sub>2</sub>) we want to find circle at (x, y) with radius r.
    </Typography>),
    (<Typography className="BaseStory-tx" component="h1">
      Simple application of the distance formula from (x, y) to (x<sub>1</sub>,y<sub>1</sub>) and from (x, y) to (x<sub>2</sub>, y<sub>2</sub>) yields:
    </Typography>),
    (<Typography className="BaseStory-tx" component="h1">
      (x<sub>1</sub> - x)<sup>2</sup> + (y<sub>1</sub> - y)<sup>2</sup> = (r<sub>1</sub> + r)<sup>2</sup>
    </Typography>),
    (<Typography className="BaseStory-tx" component="h1">
      (x<sub>2</sub> - x)<sup>2</sup> + (y<sub>2</sub> - y)<sup>2</sup> = (r<sub>2</sub> + r)<sup>2</sup>
    </Typography>),
    (<Typography className="BaseStory-tx" component="h1">
      This equation is still fairly ugly to solve, so we rotate our axies so that the line from (x, y) to (x<sub>1</sub>, y<sub>1</sub>) is horizontal.
      Using projections we decompose(x<sub>2</sub>, y<sub>2</sub>) into values h and s:
    </Typography>),
    im(require('./CircleImages/untitled41.png')),

    (<Typography className="BaseStory-tx" component="h1">
      h<sup>2</sup> + (s - r)<sup>2</sup> = (r + r<sub>2</sub>)<sup>2</sup>
    </Typography>),
    (<Typography className="BaseStory-tx" component="h1">
      r = (h<sup>2</sup> + s<sup>2</sup> - (r<sub>2</sub>)<sup>2</sup>) / (2r<sub>2</sub> + 2s)
    </Typography>),
    tx("Now that we have r, we can easily compute (x, y) and we are done!"),

    h1("Binary Searching for our circle:"),
    tx("The bounds for our points is the interval between the two points of tangency."),
    im(require('./CircleImages/untitled5.png')),

    h1("Other solutions"),
    (<Typography className="BaseStory-tx" component="h1">
      Rather than estimating the solution, we could mathematically derive the equation for the circle.
      If our circles are centered at (x<sub>1</sub>, y<sub>1</sub>), (x<sub>2</sub>, y<sub>2</sub>), (x<sub>3</sub>, y<sub>3</sub>)
      with radii r<sub>1</sub>, r<sub>2</sub>, r<sub>3</sub>, then we simply solve the following equations
      for our new circle centered at (x, y) with radius r:
    </Typography>),

    (<Typography className="BaseStory-tx" component="h1">
      (x - x<sub>1</sub>)<sup>2</sup> + (y - y<sub>1</sub>)<sup>2</sup> = (r<sub>1</sub> + r)<sup>2</sup>
    </Typography>),

    (<Typography className="BaseStory-tx" component="h1">
      (x - x<sub>2</sub>)<sup>2</sup> + (y - y<sub>2</sub>)<sup>2</sup> = (r<sub>2</sub> + r)<sup>2</sup>
    </Typography>),

    (<Typography className="BaseStory-tx" component="h1">
      (x - x<sub>3</sub>)<sup>2</sup> + (y - y<sub>3</sub>)<sup>2</sup> = (r<sub>3</sub> + r)<sup>2</sup>
    </Typography>),
    tx("Solving these equations precisely proved more difficult computationally than our previous solution, " +
      "so a precise mathematical solution was abandoned."),

    h1("Visualizing our solution in JavaScript"),
    tx("To visualize our circle generation, we use JavaScript Canvas. " +
      "We seed our program with three circles, then it recursively generates circles down to a certain radius size. " +
      "On mousescroll, we zoom in or out around the mouse pointer. Traditional canvas scaling limits our scrolling depth, " +
      "because circles can only have a radius so small before they cannot be drawn. " +
      "So we manually update the coordinates and radii of our circles and then redraw. " +
      "To keep our program efficient, we only generate new circles in the visible window."),

    h1("Source code"),
    (<Typography className="BaseStory-tx" component="h1">
      <a href={"https://github.com/NathanDeGraaf/nedg.io/blob/master/public/canvas.js"}>{"https://github.com/NathanDeGraaf/nedg.io/blob/master/public/canvas.js"}</a>
    </Typography>),

    h1("Related Works"),
    (<Typography className="BaseStory-tx" component="h1">
      <a href={"http://jwilson.coe.uga.edu/EMAT6680Su06/Swanagan/Assignment7/BSAssignment7.html"} target={"_blank"}>{"Tangent Circles of Two Separate Circles by Brian Swanagan"}</a>
      : an alternative generalized approach to finding a circle tangent to two other circles.
    </Typography>),
    (<Typography className="BaseStory-tx" component="h1">
      <a href={"http://whistleralley.com/tangents/tangents.htm"} target={"_blank"}>{"Tangent Circles by Paul Kunkel"}</a>
      : an in depth mathematical discussion of finding all circles tangent to circles, lines, and points.    </Typography>),

    h1("Potential further work"),
    tx("Look into inversion geometry as a way to generate tangent circles precisely"),
    tx("Mobile (iOs) support for viewing and interacting with JavaScript"),
    tx("Click and drag exploration of the canvas"),
    tx("Generating high quality renderings of our circles")
  ];
}

export default CircleStory;
