import * as React from 'react';
import './BasePage.css';

class Circles extends React.Component {
  public render() {
    window.location.href = "http://www.nedg.io/circles.html";
    return (
      <div>Redirecting to /circles.html</div>
    )
  }
}

export default Circles;
