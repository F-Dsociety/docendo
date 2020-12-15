import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'
import axios from 'axios';
// import List from './List';
// import AddProject from './AddProject';
import { useRouteMatch, Redirect} from 'react-router-dom';
import Student from './Student';
import Teacher from './Teacher';

export default function Dashboard({user}){
  const [show,setShow] = useState(true)
  const [license, setLicense] = useState(null)

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
        <Modal show={show} onHide={()=>setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>What would you like to do today</Modal.Title>
          </Modal.Header>
          <Modal.Footer className='d-flex justify-content-around'>
            <Button 
              variant="primary" 
              onClick={()=>{
                setLicense('teach')
                setShow(false)
              }}
            >
              Teach
            </Button>
            <Button 
              variant="success" 
              onClick={()=>{
                setLicense('learn')
                setShow(false)
              }}
            >
              Learn
            </Button>
          </Modal.Footer>
        </Modal>
        {
          license
        &&
          <>
            {/* hi {user[license].firstname} */}
            {/* <AddProject getData={this.getData} /> */}
            {/* <List list={this.state.projects} /> */}
            {
              license==='teach'
              ?
                user.teach
                  ?
                <Teacher data={user.teach} />
                :
                <Redirect to="/addlicense/teach" />

              :
                user.learn
                  ?
                <Student data={user.learn} />
                :
                <Redirect to="/addlicense/learn" />
                
            }

          </>
        }
      </div>
    )
  
}
