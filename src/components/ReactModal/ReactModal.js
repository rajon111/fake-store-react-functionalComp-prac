import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    console.log(props.product);
    const {image,price,title,description} =props.product
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
      details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <img className='w-25 m-auto p-2' src={image} alt="" />
          <Modal.Title>{title}</Modal.Title> 
          
        </Modal.Header>
        <Modal.Header >
            
          <Modal.Title>${price}</Modal.Title> 
          
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default ReactModal;