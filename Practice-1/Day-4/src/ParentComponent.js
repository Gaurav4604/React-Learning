import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(){
        super();
        this.state = {
            message: 'Hello for Parent invoked by',
        }
        this.greetMessage = this.greetMessage.bind(this);
    }

    greetMessage(id){
        alert(`${this.state.message} ${id}`);
    }

    render() {
        return (
            <div>
                <ChildComponent id='1' clickHandler={this.greetMessage}/>
                <ChildComponent id='2' clickHandler={this.greetMessage}/>
                <ChildComponent id='3' clickHandler={this.greetMessage}/>
                <ChildComponent id='4' clickHandler={this.greetMessage}/>
            </div>
        );
    }
}

export default ParentComponent;