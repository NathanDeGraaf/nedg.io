import * as React from 'react';
import {Circle, Layer, Stage, Text} from 'react-konva';
import './App.css';



class Circles extends React.Component {
    public render() {
        const height = window.innerHeight - 100;
        const radius = Math.min(300, height / 2);
        const centerX = window.innerWidth / 2;
        const centerY = height / 2;

        const textX = centerX - radius + 140;
        const textY = centerY - 15;

        return (
        <div className="App">
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
                        text="ASDF goes here"
                        fontSize={30}
                        align={"center"}
                        fontFamily={"Roboto"}
                        x={textX}
                        y={textY}
                    />
                </Layer>
            </Stage>
        </div>
    );
  }
}

export default Circles;
