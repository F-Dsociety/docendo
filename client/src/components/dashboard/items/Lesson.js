import React,{useState} from 'react';
import {Modal,Button,Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Lesson({lesson:{title,description,materials,_id}}){
  let [show, setShow] = useState(false)
  return(
    <Row>
      {/* <Button onClick={() => setShow(true)}>
        {title} available materials: {materials.length}
      </Button> */}
      <Link to={`/lesson/details/${_id}`}>{title}</Link>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          {title} available matherials: {materials.length}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {description}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-around'>
          <Button variant='danger' onClick={()=>setShow(false)}>Remove</Button>
          <Button variant='warning' onClick={()=>setShow(false)}>Edit</Button>
          <Button onClick={()=>setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}