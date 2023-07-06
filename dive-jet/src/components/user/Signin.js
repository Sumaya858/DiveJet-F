import React, { useState } from 'react';
// import { Container, Form, Button } from "react-bootstrap"


// export default function Signin(props) {
    
//     const [newUser, setNewUser] = useState({}); 

//     const changeHandler = (e) => { 
//         const user = {...newUser}; //... means copy, make a copy for newUser
//         user[e.target.name] = e.target.value; //[e.target.name]: is the field name //[e.target.value]:field that I'm currently typing in 
//         console.log(user);
//         setNewUser(user);
//     }

//     const loginHandler = () => {
//       // console.log('In Login Handler', newUser)
//         props.login(newUser)
//     }

//   return (
//     <div>
//       <br></br>
//       <br></br>
//       <br></br>
//         <h1>Sign in</h1>
//         <Container>
//             <Form.Group>
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control name="emailAddress" onChange={changeHandler}></Form.Control>
//             </Form.Group>
//             <Form.Group>
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
//             </Form.Group>
//             <br></br>
//             <Button variant='primary' onClick={loginHandler} >Log In</Button>
//         </Container>
//     </div>
//   )
// }

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput
}
from 'mdb-react-ui-kit';

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
    <MDBContainer fluid>
        <br></br>
        <br></br>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBInput label='Your Email' id='form2' type='email' name="emailAddress" onChange={changeHandler}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBInput label='Password' id='form3' name="password" type="password" onChange={changeHandler}/>
              </div>

              <MDBBtn className='mb-4' size='lg'  onClick={loginHandler} >Log in</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              {/* <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/> */}
              {/* <MDBCardImage src='https://i.pinimg.com/originals/30/48/58/30485866edfa12067101718b823fd37e.gif' fluid/> */}
              {/* <MDBCardImage src='https://i.pinimg.com/originals/fe/4b/c3/fe4bc367c796f800a0897599c2ba2022.gif' fluid/> */}
              {/* <MDBCardImage src='https://i.pinimg.com/originals/12/4e/40/124e4014582b4dc62dd3bc8547d21659.gif' fluid/> */}
              <MDBCardImage src='https://gifdb.com/images/high/ponyo-and-sosuke-underwater-d0z30es7jdmzyd5m.gif' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

