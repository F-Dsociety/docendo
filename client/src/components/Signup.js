import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { signup } from '../services/auth';

export default function Signup({ setUser, history }) {

  const [credentials, setCredentials] = useState({})
  const [message, setMessage] = useState('');
  const [nextstep, setNextstep] = useState(false)


  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    signup(credentials)
      .then(data => {
        if (data.message) {
          setMessage(data.message)
          // setCredentials({})
        } else {
          // put the user in the state of App.js
          setUser(data);
          history.push('/dashboard');
        }
      })
  }

  return (

    <div className="auth-container">
      {message && (
        <Alert variant='danger'>{message}</Alert>
      )}
      
        <h2>Signup</h2>
        
          
            <Form onSubmit={nextstep? (e)=>handleSubmit(e):(e)=>{e.preventDefault();setNextstep(true)}}>
            <Form.Group>
                <Form.Label htmlFor='username'></Form.Label>
                <Form.Control
                  type='text'
                  name='username'
                  id='username'
                  placeholder='username'
                  
                  value={credentials.username}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='password'></Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  placeholder='password'
                  id='password'
                  value={credentials.password}
                  onChange={handleChange}
                />
              </Form.Group>
            {
            nextstep
            &&
            <>
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
              <Form.Group>
                <Form.Label >What you want to do: </Form.Label>
                {['teach', 'learn'].map(item => <Form.Check inline name='license' value={item} onChange={handleChange} label={item} type='radio' />)}

              </Form.Group>
              </>
            }
            {
            nextstep ?
              <Button variant='info' type='submit'>Enter my dashboard</Button>
              :
              <Button variant='info' type='submit'> Signup</Button>
            }
            </Form>
          
      </div>
  )

}
