'use client'

import Card from 'react-bootstrap/Card';

export const CardBody = ({children, ...props}) => {
    return <Card.Body {...props}>{children}</Card.Body>
}

export const CardHeader = ({children, ...props}) => {
    return <Card.Header {...props}>{children}</Card.Header>
}
