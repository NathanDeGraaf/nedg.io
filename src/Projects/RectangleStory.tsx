import '../BasePage.css';
import * as React from 'react';
import IBaseStory, {h1, im} from "../BaseStory";
import Typography from '@material-ui/core/Typography';

class RectangleStory extends IBaseStory {
  protected title: string = "Pattern Compression Algorithm";
    protected body: JSX.Element[] = [
      h1("Faster Compression of Patterns to Rectangle Rule Lists"),
      im(require("./RectangleResources/Rectangles.png")),
      (<Typography className="BaseStory-tx" component="h1">
        {"Written with "}
        <a href={"http://ianalbuquerque.com"} target={"_blank"}>{"Ian Albuquerque Raymundo Da Silva"}</a>
        {" and "}
        <a href={"http://www.cs.iit.edu/~calinesc/"} target={"_blank"}>{"Gruia Calinescu"}</a>
        {", this paper applies new data structures to an existing pattern compression algorithm to significantly improve the runtime complexity.\n" +
        "Research took place at Illinois Institute of Technology with the support of the National Science Foundation NSF-1461260(REU).\n" +
        "The paper will be presented and included in the proceedings of the December 2018 "}
        <a href={"https://aaim2018.wordpress.com"} target={"_blank"}>{"International Conference on Algorithmic Aspects in Information and Management"}</a>.
      </Typography>),
      (<Typography className="BaseStory-tx" component="h1">
        <b>Abstract</b>
        {" Access Control Lists (ACLs) are an essential security component in network routers.\n" +
        "ACLs can be geometrically modeled as a two-dimensional black and white grid; our interest is in the most efficient way to represent such a grid.\n" +
        "The more general problem is that of Rectangle Rule Lists (RRLs), which is finding the least number of rectangles needed to generate a given pattern.\n" +
        "The scope of this paper focuses on a restricted version of RRLs in which only rectangles that span the length or width of the grid are considered.\n" +
        "Applegate et al.’s paper “Compressing Rectilinear Pictures and Minimizing Access Control Lists” gives an algorithm for finding an optimal solutions for strip-rule RRLs in O(n^3) time,\n" +
        "where n is the total number of rows and columns in the grid.\n" +
        "Following the structure of Applegate et al.’s algorithm, we simplify the solution, remove redundancies in data structures,\n" +
        "and exploit overlapping sub-problems in order to achieve an optimal solution for strip-rule RRLs in O(n^2 log n) time."}
      </Typography>)
    ];
}

export default RectangleStory;
