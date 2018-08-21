import '../BasePage.css';
import BaseStory from "../BaseStory";
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

class ResumeStory extends BaseStory {
  protected title: string = "Resume";
  protected body: JSX.Element[] = [
    (<Typography className="BaseStory-tx" component="h1">
        <Link to={require('./resume.pdf')} target="_blank">Full PDF</Link>
      </Typography>)
  ];
}

export default ResumeStory;
