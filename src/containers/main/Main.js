import React, { Component } from 'react';

import './Main.css';

import background from "./background.png";

class Main extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <div>
        <img src={background} width="100%" alt="background da home" />
      </div>
    );
  }
}

export default Main;