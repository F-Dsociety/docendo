import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import LessonEdit from './LessonEdit';
import ScheduleIt from './ScheduleIt';

export default class LessonDetails extends Component {
  
  state = {
    lesson: null,
    editForm: false,
    error: null,
    showScheduleItForm: false,
    id: this.props.match.params.id
  }

  getData = () => {
    // get the project that was clicked from the server
    axios.get(`/api/lesson/${this.state.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          lesson: response.data
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
    
    axios.delete(`/api/lesson/${this.state.id}`)
      .then(() => {
        // this is how you do a redirect with react router dom
        this.props.history.push('/current-lessons/');
      })
  }

  toggleEditForm = () => {
    this.setState((prevState) => ({
      editForm: !prevState.editForm
    }))
  }

  toggleScheduleFrom = ()=>{
    this.setState({showScheduleItForm: !this.state.showScheduleItForm})
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
    if (this.state.error) return <h1>{this.state.error}</h1>
    if (!this.state.lesson) return <h1>Loading...</h1>

    let allowedToModify = false;

    const user = this.props.user;
    const { title, description, owner } = this.state.lesson;

    if (user && user.teach._id === owner._id) allowedToModify = true;
    console.log(user, owner)

    return (
      <div className="lesson-details-container">

        <div>
          <h2>{title}</h2>
          <h5>{owner.firstname} profile link</h5>
          <p>{description}</p>
        </div>
        {
          allowedToModify
            && 
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
        }

        {!allowedToModify && (
          <div>
            
            {
              this.state.showScheduleItForm
              ?
              <ScheduleIt user={this.props.user} lesson={this.state.lesson} cancel={this.toggleScheduleFrom}  />
              :
              <Button onClick={this.toggleScheduleFrom}>Schedule it</Button>
            }

          </div>
        )}

      </div>
    )
  }
}
