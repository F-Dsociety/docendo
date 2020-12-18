import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export default class LessonEdit extends Component {
  render() {
    return (
      <div>
        <h2>Edit your class</h2>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='title'>Title: </Form.Label>
            <Form.Control
              type='text'
              id='title'
              name='title'
              value={this.props.title}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='description'>Description: </Form.Label>
            <Form.Control
              type='text'
              id='description'
              name='description'
              value={this.props.description}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Button variant='info' type='submit'>Update Project</Button>
        </Form>
      </div>
    )
  }
}
