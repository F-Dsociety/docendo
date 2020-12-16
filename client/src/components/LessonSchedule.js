
import axios from 'axios';
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export default class LessonSchedule extends Component {
  
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
    return (
      <div>
        <h2>Schedule your class</h2>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='title'>Title: </Form.Label>
            <Form.Control
              type='date'
              id='title'
              name='title'
              value={this.props.title}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='description'>Who takes the class?: </Form.Label>
            <Form.Control
              type='text'
              id='description'
              name='description'
              value={this.props.description}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Button type='submit'>Update Project</Button>
        </Form>
      </div>
    )
  }
}