import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

export default class AddProject extends Component {

  state = {
    title: '',
    description: ''
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    console.log(this.state);
    axios.post('/api/projects', {
      title: this.state.title,
      description: this.state.description
    })
      .then(() => {
        // set the form to it's initial state (empty input fields)
        this.setState({
          title: '',
          description: ''
        })
        // update the parent components state (in Projects) by calling getData()
        this.props.getData();
      })
      .catch(err => console.log(err))

  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor='title'>Title: </Form.Label>
          <Form.Control
            type='text'
            id='title'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='description'>Description: </Form.Label>
          <Form.Control
            type='text'
            id='description'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type='submit'>Add a Project</Button>
      </Form>
    )
  }
}
