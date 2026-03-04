import { createFileRoute, redirect } from '@tanstack/react-router'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import type { LoginCredentials } from '#/types';
import { useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/(login)/login')({
  component: Login,
})

function Login() {

  const { auth } = Route.useRouteContext()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  //const [error, setError] = useState('')

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget);
    const credentials = Object.fromEntries(formData) as unknown as LoginCredentials;

    try {
      await auth.login(credentials)
      navigate({
        to: '/todo'
      });
    } catch (err: any) {
      console.log(err.response.data);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-vh-100 d-flex justify-content-center align-items-center'>
      <Card className='w-25 h-50 d-inline-block'>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control name='email' type='email' placeholder='Enter Email'></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type='password' placeholder='Enter Password'></Form.Control>
            </Form.Group>
            <div className='justify-content-end d-flex w-100'>
              <Button variant='secondary' type='submit' className='mt-3'>{isLoading ? 'Signing in...' : 'Sign In'}</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}