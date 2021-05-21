import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux';


import { authActions } from '../redux/actions'

// 1. Sign Up Form
// 2. Sign Up action
// 3. Dispatch action=

function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const onSignUp = (e) => {
    e.preventDefault()
    dispatch(authActions.register(email, password));
  }

  return (
    <Container>
      <h1>Auth Page</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
             type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={onSignUp} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}


export { AuthPage };