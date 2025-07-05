import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      summary: "",
      courses: "Vue",
    };
  }
  HandleUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  ChangeSummary = (event) => {
    this.setState({
      summary: event.target.value,
    });
  };
  Changecourses = (event) => {
    this.setState({
      courses: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`Your name is: ${this.state.username},your choosed course is: ${this.state.courses} about yours ${this.state.summary}`
    );
    // event.preventDefault()
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.HandleUserName}
          ></input>
        </div>
        <div>
          <label>Summary:</label>
          <textarea
            value={this.state.summary}
            onChange={this.ChangeSummary}
          ></textarea>
        </div>
        <div>
          <label>Courses:</label>
          <select value={this.state.courses} onChange={this.Changecourses}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Java Script</option>
          </select>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
        
      </form>
    );
  }
}

export default Form;
