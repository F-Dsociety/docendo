import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import LessonEdit from './LessonEdit';
import LessonSchedule from './LessonSchedule';

export default class LessonDetails extends Component {

  state = {
    project: null,
    editForm: false,
    error: null,
    title: '',
    description: '',
    owner: '',
    schedule:''
  }

  getData = () => {
    const id = this.props.match.params.id;
    // get the project that was clicked from the server
    axios.get(`/api/lesson/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description,
          owner: response.data.owner
        })
      })
      .catch(err => {
        console.log(err.response)
        if (err.response.status === 404) {
          this.setState({
            error: 'Sorry - Project Not found 🤷‍♀️ 🤷‍♂️'
          })
        }
      })
  }

  componentDidMount = () => {
    this.getData();
  }
  deleteProject = () => {
    // delete this project from the database
    const id = this.props.match.params.id;
    axios.delete(`/api/projects/${id}`)
      .then(() => {
        // this is how you do a redirect with react router dom
        this.props.history.push('/projects');
      })
  }

  toggleEditForm = () => {
    this.setState((prevState) => ({
      editForm: !prevState.editForm
    }))
  }
  toggleSchedule = () => {
    this.setState((prevState) => ({
      schedule: !prevState.schedule
    }))
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios.put(`/api/lesson/${id}`, {
      title: this.state.title,
      description: this.state.description
    })
      .then(response => {
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description,
          editForm: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    if (this.state.error)     return <h1>{this.state.error}</h1>
    if (!this.state.project)  return <h1>Loading...</h1>

    let allowedToModify = false;

    const user = this.props.user;
    const owner = this.state.project.owner;

    if (user && user._id === owner) allowedToModify = true;
    
    return (
      <div className= "lesson-details-container">
          
        <div>
          <h2>{this.state.project.title}</h2>
          <h5>teacherName profile link</h5>
          <p>{this.state.project.description}</p>
        </div>
        {allowedToModify && (
          <div>
          <Button variant='danger' onClick={this.deleteProject}>Delete</Button>
          <Button onClick={this.toggleEditForm}>Edit</Button>
            {this.state.editForm && (
            <LessonEdit
              {...this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}
          
          </div>
        )}

        {!allowedToModify && (
          <div>
          <Button onClick={this.toggleSchedule}>Schedule it</Button>
            {this.state.editForm && (
            <LessonSchedule
               {...this.state}
              // handleChange={this.handleChange}
              // handleSubmit={this.handleSubmit}
            />
          )}
          
          </div>
        )}

      </div>
    )
  }
}
