import React from 'react'

import { Container, Form, Button } from "react-bootstrap"
// import index from './HTML/index.html'
import ContactAdd from './ContactAdd'


export default function Contact() {
  return (
    <div className='timing'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <h4>working Hour</h4>
    <p>Sunday to Thuresday: 7:00 Am to 5:00Pm </p>

    <h4>Phone Number</h4>
    <p>+97317558899</p>

    <h4>Email Address</h4>
    <p>info@divejet.com</p>

    <h4>Location</h4>
    

    <div>
      <br></br>
      <br></br>
      <br></br>

    <h2>Happy to hear from you </h2>
        <Container>
          {/* <Form>
        <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control name="title onChange={(e) => setTitle(e.target.value)} "></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="emailAddress onChange={(e) => setEmail(e.target.value)} "></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>your message</Form.Label>
            <Form.Control name="message onChange={(e) => setDescription(e.target.value)} "></Form.Control>
        </Form.Group>

        <Button variant='primary onClick={(e) => setSubmit(e.target.value)}'>Submit</Button>
        </Form>
             */}
             <ContactAdd/>
         </Container>
    </div>
</div>
  )
}