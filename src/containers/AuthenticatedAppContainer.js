import { Component } from 'react';

// looks like I don't need this. I probably can just convert the RequireAuth in this container class
class AuthenticatedAppContainer extends Component {
  render() {
    return (
      this.props.children
    )
  }
}

export default AuthenticatedAppContainer;
