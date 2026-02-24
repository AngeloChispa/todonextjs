'use client'

import fetchAPI from '@/lib/fetch';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditModal = ({data, id}) => {

    const [show, setShow] = useState(false);
    const handleShow= () => setShow(true)
    const handleClose = () => setShow(false);
    const [message, setMessage] = useState(data);
    const router = useRouter();

    const saveChanges = async () => {
      fetchAPI({message:message, verb: 'PATCH', id:id}); 

      router.refresh();
      handleClose();
    }

    return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group>
                <Form.Control type='text' value={message} onChange={(e) => setMessage(e.target.value)}></Form.Control>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )

}

export default EditModal;