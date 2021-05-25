import React, {Component} from 'react';

class Welcome extends Component {
    render(props){
        return (
            <h1>
                This is {this.props.name} saying {this.props.message}
            </h1>
        );
    }
}

export default Welcome;