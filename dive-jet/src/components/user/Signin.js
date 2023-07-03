import React, { useState } from 'react';
import { Container, Form, Button } from "react-bootstrap"


export default function Signin(props) {
    
    const [newUser, setNewUser] = useState({}); 

    const changeHandler = (e) => { 
        const user = {...newUser}; //... means copy, make a copy for newUser
        user[e.target.name] = e.target.value; //[e.target.name]: is the field name //[e.target.value]:field that I'm currently typing in 
        console.log(user);
        setNewUser(user);
    }

    const loginHandler = () => {
        props.login(newUser)
    }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
        <h1>Sign in</h1>
        <Container>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="emailAddress" onChange={changeHandler}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
            </Form.Group>
            <br></br>
            <Button variant='primary' onClick={loginHandler} >Log In</Button>
        </Container>
    </div>
  )
}