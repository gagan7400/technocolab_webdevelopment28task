import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    e.preventDefault();
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    let login = (<form action="#" onSubmit={this.authorize}>
      <input type="password" placeholder='Password'></input>
      <input type='submit' />
    </form>)
    let contactInfo = (<ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>)
    return (
      <div id="authorization">
        <h1>{this.state.authorized ? "Contact" : "Enter The Password"}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

