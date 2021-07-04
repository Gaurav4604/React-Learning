import React, { Component } from 'react'

export class ClassClick extends Component {
    
    clickFunction(){
        document.body.append("Hello there");
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickFunction}>
                Click Me bruh
                </button>
            </div>
        )
    }
}

export default ClassClick
