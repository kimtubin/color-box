import { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorsNum: 50,
      colors: []
    };
    for (let i = 0; i < this.state.colorsNum; i += 1) {
      this.state.colors.push(this.generateColor());
    }
  }

  generateColor = () => {
    return (
      "hsl(" +
      360 * Math.random() +
      "," +
      (25 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)"
    );
  };

  handleClick = (index) => {
    let colors = this.state.colors.slice();
    const currentColor = this.generateColor();
    colors[index] = currentColor;
    this.setState({ colors });
  };

  render() {
    return (
      <div className="App">
        <h1>Color Box</h1>
        <div className="ColorBox-container">
          {this.state.colors.map((color, index) => {
            return (
              <div
                className="ColorBox"
                style={{ backgroundColor: color }}
                onClick={() => this.handleClick(index)}
              ></div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
