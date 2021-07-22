import React, { Component } from 'react';

class Message extends Component {

    constructor(){
        super();
        this.state ={
            message : "Welcome Visitor",
            loggedIn : false
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(name, nickName){
        this.setState({
            message: `Welcome ${name} a.k.a ${nickName}`,
            loggedIn : true
        })
    }
    

    render() {
        const {name, nickName} = this.props;
        return (
            <div>
                <p>{this.state.message}</p>
                {this.state.loggedIn && <p>Wassup with you today?!</p> }
                <button onClick={() => this.clickHandler(name, nickName)}>Login</button>
            </div>
        );
    }
}

export default Message;