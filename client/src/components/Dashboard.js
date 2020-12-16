import React, { Component } from 'react'
import {Accordion,Card,Button} from 'react-bootstrap'
import axios from 'axios';
import List from './List';
import AddProject from './AddProject';

export default function Dashboard({user}){

  // state = {
  //   projects: []
  // }
  // getData = () => {
  //   // get the current list of projects from the server
  //   axios.get('/api/projects')
  //     .then(response => {
  //       console.log(response);
  //       // put them into the state
  //       this.setState({
  //         projects: response.data
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }

  // componentDidMount() {
  //   this.getData();
  // }

    return (
      <div className='projects-container'>
        {/* hi {user.teach.firstname} */}
        {/* <AddProject getData={this.getData} /> */}
        {/* <List list={this.state.projects} /> */}
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Students list
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">

              <Card.Body>
                {
                  user.teach.studentsList.length
                  ?
                  user.teach.studentsList.map(student=><div></div>)
                  :
                  <div>no students yet</div>
                
                }
              </Card.Body>

            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Lessons list
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              {
                  user.teach.lessons.length
                  ?
                  user.teach.lessons.map(lesson=><div></div>)
                  :
                  <div>no lessons yet</div>
                
                }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Responces list
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
              {
                  user.teach.responces.length
                  ?
                  user.teach.responces.map(responce=><div></div>)
                  :
                  <div>no responces yet</div>
                
                }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  
}
