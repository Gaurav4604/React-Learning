import React, { Component } from 'react';

class UserGreeting extends Component {
constructor(props) {
    super(props)

    this.state = {
         isLoggedIn: false
    }
}
    render() {
        // when if else is to be used
        return this.state.isLoggedIn? <div>Welcome Gaurav</div> : <div>Welcome guest</div>
        // when if true then render is to be used
        // return this.state.isLoggedIn && <div>Welcome Gaurav</div>
    }
}

export default UserGreeting;