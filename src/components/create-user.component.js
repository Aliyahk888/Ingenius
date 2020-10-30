
import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
	constructor(props) {
  super(props);
  this.onChangeUsername = this.onChangeUsername.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.state = {
    username: ''
  };
}
onChangeUsername(e) {
  this.setState({
    username: e.target.value
  });
}
onSubmit(e) {
  e.preventDefault();
  const newUser = {
    username: this.state.username,
  };
  console.log(newUser);
  axios.post('http://localhost:5000/users/add', newUser)
  .then(res => console.log(res.data));
  alert("Team succesfully created! Now go ahead and create some challenges!");
  
  this.setState({
    username: ''
  })
}
  render() {
    return (
<div>
  <h3>Create New Team</h3>
  <form onSubmit={this.onSubmit}>
    <div className="form-group"> 
      <label>Team name: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.username}
          onChange={this.onChangeUsername}
          />
    </div>
    <div className="form-group"> 
      <label>Member 1: </label>
      <input  type="text"
          required
          className="form-control"
          />
    </div>

    <div className="form-group"> 
      <label>Member 2: </label>
      <input  type="text"
          required
          className="form-control"

          />
    </div>

    <div className="form-group"> 
      <label>Member 3: </label>
      <input  type="text"
          required
          className="form-control"

          />
    </div>

    <div className="form-group"> 
      <label>Member 4: </label>
      <input  type="text"
          required
          className="form-control"

          />
    </div>

    <div className="form-group">
      <input type="submit" value="Create Team" className="btn btn-primary" />
    </div>
  </form>
</div>
    )
  }
}