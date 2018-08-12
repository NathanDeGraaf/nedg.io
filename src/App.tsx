import * as React from 'react';
import {Circle, Layer, Stage, Text} from 'react-konva';
import DocumentTitle from 'react-document-title';
import './App.css';
import TopBar from './TopBar';


class App extends React.Component {
  public render() {
    const height = window.innerHeight - 100;
    const radius = Math.min(300, height / 2);
    const centerX = window.innerWidth / 2;
    const centerY = height / 2;

    const textX = centerX - radius + 140;
    const textY = centerY - 15;

    return (
      <DocumentTitle title={"Nathan De Graaf"}>
        <div className="App">
          <TopBar/>
          <Stage width={window.innerWidth} height={height}>
            <Layer>
              <Circle
                x={centerX}
                y={centerY}
                radius={radius}
                fill={"#f9ffad"}
                stroke="black"
              />
              <Text
                text="Cool stuff goes here"
                fontSize={30}
                align={"center"}
                fontFamily={"Roboto"}
                x={textX}
                y={textY}
              />
            </Layer>
          </Stage>
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
