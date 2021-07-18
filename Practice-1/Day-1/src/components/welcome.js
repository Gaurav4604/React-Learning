import React, {Component} from 'react';

class Welcome extends Component {
    render(){
        return (
            <div>
                <h1>
                This is {this.props.name} saying {this.props.message}
                <br/>
                <br/>
                This is {this.props.name} saying {this.props.message}
            </h1>
            {this.props.children}
            </div>
        );
    }
}

export default Welcome;