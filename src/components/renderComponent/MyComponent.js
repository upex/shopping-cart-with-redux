import React, {Component} from 'react';

class MyComponent extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return this.props.names.map(item => (<p key={item.id}> {item.name}===></p>))
  }
}

export default MyComponent