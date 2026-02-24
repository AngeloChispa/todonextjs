'use client'

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import fetchAPI from '@/lib/fetch';
import { useRouter } from 'next/navigation';
import EditModal from './EditModal';


export const dynamic = 'force-dynamic';

const Items = ({allNotesData}) => {

    const router = useRouter();

    const destroy = async (id) => {
        fetchAPI({verb: 'DELETE', id: id});

        router.refresh();
    }

    return <div className='mt-5'>
        <ListGroup as="ol" numbered className='w-auto d-inline-block'>
            {
                allNotesData.map(note =>
                    <ListGroup.Item key={note.id} as="li" className='w-auto d-flex justify-content-between align-items-start' >{note.message} <div>
                        <Button  variant='secondary' className='ms-5 me-2' onClick={() => {destroy(note.id)}}>Remove</Button> 
                        <EditModal data={note.message} id={note.id}></EditModal>
                        </div></ListGroup.Item>
                )
            }
        </ListGroup>
    </div>
}

export default Items;
