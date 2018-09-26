import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={e => this.setState({ [e.target.name]: e.target.value })} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={e => this.setState({ [e.target.name]: e.target.value })} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit" onClick={e => this.props.onSubmit(e)}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
