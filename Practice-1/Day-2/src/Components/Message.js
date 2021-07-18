import React, { Component } from "react";

class Message extends Component {

    constructor(){
        super();
        this.state = {
            message: "Welcome"  // this message is a String enclosed by State object
        }
    }

    changeMessage(){
        this.setState({
            message: "Thankyou for Subscribing"
        })
    }

  render() {
    return (
      <div>
        <h1>
        {this.state.message + " " + this.props.name}
        </h1>
        <button onClick ={
            () => this.changeMessage()
        }>Subscribe</button>

        {this.props.children}
      </div>
    );
  }
}

export default Message;
