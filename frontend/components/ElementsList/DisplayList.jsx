'use client'

import ListGroup from 'react-bootstrap/ListGroup';

const DisplayList = ({allNotesData}) => {
    return <div className='mt-5'>
        <ListGroup as="ol" numbered className='w-auto d-inline-block'>
            {
                allNotesData.map(note =>
                    <ListGroup.Item key={note.id} as="li" className='w-auto' >{note.message}</ListGroup.Item>
                )
            }
        </ListGroup>
    </div>
}

export default DisplayList;