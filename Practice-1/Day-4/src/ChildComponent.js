import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
        const {id, clickHandler} = this.props;
        return (
            <div>
                <button onClick={() => clickHandler(id)}>Child Component {id}</button>
            </div>
        );
    }
}

export default ChildComponent;