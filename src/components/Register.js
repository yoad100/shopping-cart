import React, { Component } from "react";
import axios from 'axios'
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeValue = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      email: '',
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      email:this.state.email
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data)).then(res=>alert('Register Success!')).catch(error => {
      if (user.username.length < 1) {
        alert('invaild username')
      }
      if (user.password.length < 1) {
        alert('invaild password')
      }
      if (user.email.length < 1) {
        alert('invaild email')
      }
    })
    

    this.setState({
      username: '',
      password:'',
      email:''
    })
  }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="Register-form">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input name="username" onChange={this.handleChange} type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" onChange={this.handleChange} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" onChange={this.handleChange} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" style={{width:"8rem"}} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}