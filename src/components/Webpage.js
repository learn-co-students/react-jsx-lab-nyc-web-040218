import React from 'react';
import FillerText from './FillerText';


class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}
export default Webpage

// import FillerText from './FillerText';
// import ReactDOM from 'react-dom';
//
// ReactDOM.render(
//   <FillerText />,
//   document.getElementById('root')
// );
