
import axios from 'axios';
import React, { Component } from 'react'
import { Form, Button,Row } from 'react-bootstrap';

export default class ScheduleIt extends Component {

  state = {
    details:{}
  }
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      details: {
        ...this.state.details,
        [name]: value
      }
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    axios.post(`/api/lesson/book`, {details: this.state.details, lesson: this.props.lesson, user:this.props.user})
      .then(response => {
        alert('lesson is booked')
        this.props.cancel()
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h2>Schedule your class</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='date'>Date: </Form.Label>
            <Form.Control
              type='date'
              id='date'
              name='date'
              value={this.state.details.date}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='comments'>Comments: </Form.Label>
            <Form.Control
              type='text'
              id='comments'
              name='comments'
              value={this.state.details.comments}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Row className='justify-content-around'>
            <Button variant='danger' onClick={this.props.cancel}>Cancel</Button>
            <Button type='submit'>Confirm</Button>
          </Row>
        </Form>
      </div>
    )
  }
}