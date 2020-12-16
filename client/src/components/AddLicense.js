import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import {addLicense } from '../services/auth';
import {useParams} from 'react-router-dom'

export default function AddLicense({ setUser, history, user }) {
  const {license} = useParams()


  let { username,password,[license==='teach'?'learn':'teach']:{firstname,lastname,email,phone,socialNetwork}} = user

  const [credentials, setCredentials] = useState({username,password,firstname,lastname,email,phone,socialNetwork,license})
  const [message, setMessage] = useState('');


  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addLicense(credentials)
      .then(data => {
        if (data.message) {
          setMessage(data.message)
          setCredentials({})
        } else {
          // put the user in the state of App.js
          setUser(data);
          history.push('/dashboard');
        }
      })
  }

  return (
    <>
      {message && (
        <Alert variant='danger'>{message}</Alert>
      )}
      <h2>Add new license</h2>
      
        
          <Form onSubmit={(e)=>handleSubmit(e)}>

    
            <Form.Group>
              <Form.Label htmlFor='firstname'>First Name: </Form.Label>
              <Form.Control
                type='text'
                name='firstname'
                id='firstname'
                value={credentials.firstname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='lastname'>Last Name: </Form.Label>
              <Form.Control
                type='text'
                name='lastname'
                id='lastname'
                value={credentials.lastname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='email'>contact email: </Form.Label>
              <Form.Control
                type='email'
                name='email'
                id='email'
                value={credentials.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='phone'>contact phone: </Form.Label>
              <Form.Control
                type='phone'
                name='phone'
                id='phone'
                value={credentials.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='socialNetwork'>web/youtube/instagram: </Form.Label>
              <Form.Control
                type='text'
                name='socialNetwork'
                id='socialNetwork'
                value={credentials.socialNetwork}
                onChange={handleChange}
              />
            </Form.Group>


            <Button type='submit'>Add new license</Button>

          </Form>
          

            


            
      
    </>
  )

}
