import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Bleh',
        }
        // setting the scope start for function
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childMessage){
        alert(`Hello ${this.state.parentName},  this is my message \n=> ${childMessage}`)
    }
    
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}
