
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTask = this.onChangeTask.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      task: '',
      users: []
    }
  }

  componentDidMount() {
axios.get('http://localhost:5000/users/')
  .then(response => {
    if (response.data.length > 0) {
      this.setState({ 
        users: response.data.map(user => user.username),
        username: response.data[0].username
      });
    }
  })
  .catch((error) => {
    console.log(error);
  })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

    onChangeTask(e) {
    this.setState({
      task: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
      task: this.state.task,
    };
  
    console.log(exercise);
    axios.post('http://localhost:5000/exercises/add', exercise)
  .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Start a new Team Challenge: </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Team name: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>

          <div className="form-group">
            <label>Duration (in minutes):  </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

            <div className="form-group">
            <label>Workout difficulty level: </label>
            <div>
            <input list="task" className="form-control" value = {this.state.description} onChange={this.onChangeDescription}/>
            <datalist id="task">
            <option value="Easy"/>
            <option value="Medium"/>
            <option value= "Hard"/>
            </datalist>
            </div>
          </div>

            <div className="form-group">
            <label>Additional Fun Tasks: </label>
            <div>
            <input list="tasks" className="form-control" value = {this.state.task} onChange={this.onChangeTask}/>
            <datalist id="tasks">
            <option value="Dance challenge"/>
            <option value="Yoga"/>
            <option value= "Martial Arts"/>
            <option value= "Aerobics"/>
            </datalist>
            </div>
          </div>





          <div className="form-group">
            <input type="submit" value="Create Challenge" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}