import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (!this.props.user) return null;
    return <h3 className="header">{this.props.user.name}</h3>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};
const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
