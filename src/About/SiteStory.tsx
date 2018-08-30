import '../BasePage.css';
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {tx} from "../BaseStory";
import BaseStory from "../BaseStory";

class WorkStory extends BaseStory {
  protected title: string = "Site info";
  protected body: JSX.Element[] = [
    (<Typography className="BaseStory-tx" component="h1">
      {"This site was built using typescript plus react along with material-ui components: the open source git repo can be found at "}
      <a href={"https://github.com/NathanDeGraaf/nedg.io"}>github.com/NathanDeGraaf/nedg.io</a>
      {". Although disclaimer that the code you will find there is far from elegant, as this was written entirely over the course of a couple weeks while I listened to podcasts."}
    </Typography>),
    tx("Last updated Aug 29, 2018")
  ];
}

export default WorkStory;
