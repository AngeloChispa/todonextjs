'use client'
import axios from 'axios'
import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation';


const InputText = () => {


    const [note, setNote] = useState('');
    const router = useRouter();

    const createNote = () => {

        axios.post('http://127.0.0.1:8000/api/Notes', {
            "message": note
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
        
        setNote('');

        router.refresh();

    }

    return <Container>
        <Row className="justify-content-md-center align-items-center">
            <Col md='auto'><Form.Control type='text' value={note} onChange={(e) => setNote(e.target.value)}></Form.Control></Col>
            <Col md='auto'><Button variant='secondary' onClick={createNote}>Create</Button></Col>
        </Row>
    </Container>
}

export default InputText