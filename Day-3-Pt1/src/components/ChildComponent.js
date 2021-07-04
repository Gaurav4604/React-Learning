import React, { Component } from 'react'

export default class ChildComponent extends Component {
    render(props) {
        return (
            <div>
                <button onClick={() => this.props.greetHandler("this is the child speaking")}>
                    Click Me
                </button>
            </div>
        )
    }
}
