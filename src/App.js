import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Simple from "./components/Simple";
import Hex from "./components/Hex";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: [
        "red",
        "blue",
        "green",
        "purple",
        "yellow",
        "orange",
        "bisque",
        "tomato",
        "pink",
        "aqua",
        "coral"
      ],
      curColor: "white"
    };
  }

  changeBgc = () => {
    let clr = Math.floor(Math.random() * this.state.colors.length);
    this.setState({ curColor: this.state.colors[clr] });
  };

  changeBgcMore = () => {
    const randomNum = Math.random().toString(16).slice(3, 9);
    let newColor = "#" + randomNum;
    this.setState({ curColor: newColor });
  };

  render() {
    const { curColor } = this.state;
    return (
      <Router>
        <NavbarMenu />
        <div className="wrapper" style={{ background: curColor }}>
          <div className="center">
            <h1 className="bg">
              BACKGROUND COLOR: <span>{curColor}</span>
            </h1>
            <Switch>
              <Route exact path="/" component={Simple}>
                <Simple changeBgc={this.changeBgc} />
              </Route>
              <Route path="/hex" component={Hex}>
                <Hex changeBgc={this.changeBgcMore} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
