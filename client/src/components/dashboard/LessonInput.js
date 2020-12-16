import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'

export default function LessonInput({getLessons,owner}) {
  let [show, setShow] = useState(false)
  let [input, setInput] = useState({})

  const handleChange = event => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    axios
    .post('/api/lesson/', {...input,owner})
    .then(response => {
      setShow(false)
      getLessons()

    })
    .catch(err => {
      console.log(err.response.data)
    });

  }

  return (
    <>
      <Button onClick={() => setShow(true)}>
        create a lesson
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title >
            Create  a lesson
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name='title' value={input.title} placeholder="English C1" onChange={handleChange}/>
          </Form.Group>

          
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name='description' value={input.description} onChange={handleChange} rows={3} placeholder="provide some extended requirements and goals"/>
          </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-around'>
          <Button variant='danger' onClick={() => setShow(false)}>Cancel</Button>
          <Button variant='success' onClick={handleSubmit}>Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}