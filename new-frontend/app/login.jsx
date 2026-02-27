import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardHeader, CardBody } from './components/Card'
import { FormGroup } from './components/Form'
import { getCookie } from './lib/getCookie';


const Login = () => {
    
    const checkData = async () => {
        getCookie();

        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            credentials: 'include'
        });

    }

    return (
        <div className='d-flex justify-content-center align-items-center p-2 flex-fill'>
            <Card border="info" style={{ width: '18rem' }}>
                <CardHeader className='text-center'>Log In </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Enter Email'></Form.Control>
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter Password'></Form.Control>
                            <div className='d-flex justify-content-end w-100 mt-3'><Button type='submit'>Submit</Button></div>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default Login;