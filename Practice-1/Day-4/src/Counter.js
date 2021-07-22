import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState((prevState) =>
      ({
        count: prevState.count + 1,
      }),
      () => console.log("state updated")
    );
  }

  incrementFive() {
      for (var i = 0; i < 5; i++)
        this.increment();
  }

    getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  render() {
    return (
      <div>
        <button onClick={() => this.incrementFive()} style={
            {
                marginTop: 10,
                width: 100,
                height: 30,
                fontSize: 20,
                borderRadius: 20,
                backgroundColor: `rgb(${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)})`
            }
        }>{this.state.count}</button>
      </div>
    );
  }
}

export default Counter;
