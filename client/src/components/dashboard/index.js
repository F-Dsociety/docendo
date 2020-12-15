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

  console.log(user)

    return (
      <div className='projects-container'>
        <Modal show={show} onHide={()=>setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Hi {user.firstname} What would you like to do today</Modal.Title>
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
