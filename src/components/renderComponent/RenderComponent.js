import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../store/actions/shoppingCartActions'
import MyComponent from './MyComponent';

class ConnectedComponent extends Component {

  componentDidMount() {
    // this.props.getUsers();
  }

  getUsers = evt => {
    this.props.getUsers();
  };

  render() {
    return this.props.children({
      users: this.props.users,
      getUsers: this.getUsers
    });
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.shoppingCart.users
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers())
    }
  };
}
const Connected = connect(mapStateToProps, mapDispatchToProps)(ConnectedComponent)

class RenderComponent extends Component {
  render() {
    return (
      <Connected>
        {({ users, getUsers }) => (
          <MyComponent names={users} getUsers={getUsers}/>
        )}
      </Connected>
    );
  }
}

export default RenderComponent;