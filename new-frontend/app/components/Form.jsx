'use client'
import { Form } from 'react-bootstrap';

export const FormGroup = ({children, ...props}) => {
    return <Form.Group {...props}>{children}</Form.Group>
}