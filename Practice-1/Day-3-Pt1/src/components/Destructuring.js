import React, { Component } from 'react';

export const Greet = ({name, codeName}) => {
    // or
    // const {name, codeName} = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {codeName}</h1>
        </div>
    )
}


export class Welcome extends Component {
    render() {
        const {name, codeName} = this.props;
        return (
            <div>
                Welcome {name} a.k.a {codeName}
            </div>
        );
    }
}
