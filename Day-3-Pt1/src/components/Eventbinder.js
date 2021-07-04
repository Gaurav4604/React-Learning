import React, { Component } from "react";

export default class Eventbinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // binding it in the constructor (best way to bind it)
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "Bye",
    });
  }

  render() {
    return (
      <div>
        {this.state.message}
        <div>
        <button
        onClick = {this.clickHandler}
        //   onClick={
        //       () => {
        //     this.clickHandler();
        //   }
        // }
        >
          click me
        </button>
        </div>
      </div>
    );
  }
}
