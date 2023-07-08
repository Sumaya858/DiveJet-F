import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  // MDBIcon,
  // MDBCheckbox
}
from 'mdb-react-ui-kit';

export default function Signup(props) {
        const [newUser, setNewUser] = useState({}); 

    const changeHandler = (e) => { 
        const user = {...newUser}; 
        user[e.target.name] = e.target.value; //[e.target.name]: is the field name //[e.target.value]:field that I'm currently typing in 
        console.log(user);
        setNewUser(user);
    }

    const registerHandler = () => {
        props.register(newUser)
    }



  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
              <p>First Name</p>&nbsp;&nbsp;&nbsp;
                {/* <MDBIcon fas icon="user me-3" size='lg'/> */}
                <MDBInput id='form1' type='text' className='w-100' name="firstName" onChange={changeHandler} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <p>Last Name</p>&nbsp;&nbsp;&nbsp;
                {/* <MDBIcon fas icon="user me-3" size='lg'/> */}
                <MDBInput id='form1' type='text' className='w-100' name="lastName" onChange={changeHandler}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <p>Your Email </p>&nbsp;&nbsp;&nbsp;
                {/* <MDBIcon fas icon="envelope me-3" size='lg'/> */}
                <MDBInput id='form2' type='email' name="emailAddress" onChange={changeHandler}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <p>Moblie </p>&nbsp;&nbsp;&nbsp;
                <MDBInput id='form2' type='text' name="mobile" onChange={changeHandler}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <p>Date of Birth </p>&nbsp;&nbsp;&nbsp;
                <MDBInput id='form2' type='date' name="age" onChange={changeHandler}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4"  >
                <p>Do you have any chronic diseases? </p>&nbsp;&nbsp;&nbsp;
                <div className="form-check" >
                  <input className="form-check-input" type="radio" name="disease" value='true' onChange={changeHandler}/>
                  <label className="form-check-label" for="flexRadioDefault1"> Yes </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="disease"  value='false' onChange={changeHandler}/>
                  <label className="form-check-label" for="flexRadioDefault2"> No </label>
                </div>
              </div> 

              <div className="d-flex flex-row align-items-center mb-4">
                <p>Password</p>&nbsp;&nbsp;&nbsp;
                {/* <MDBIcon fas icon="lock me-3" size='lg'/> */}
                <MDBInput id='form3' name="password" type="password" onChange={changeHandler}/>
              </div>

              <MDBBtn className='mb-4' size='lg'  onClick={registerHandler} >Register</MDBBtn>

            </MDBCol>


            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              {/* <MDBCardImage src='https://media.tenor.com/S3jQ2lRCxmsAAAAC/ghibli-ponyo.gif' fluid/> */}
              <MDBCardImage src='https://media.tenor.com/G_Kymcvj-4UAAAAi/best-friends-forever-scuba.gif' fluid/>
              {/* <MDBCardImage src='https://media.tenor.com/rizoKCSZ98cAAAAd/helpmepls-kuchnahiaatahelp.gif' fluid/> */}
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}





















// import { Container, Form, Button } from "react-bootstrap"


// export default function Signup(props) {

//     const [newUser, setNewUser] = useState({}); 

//     const changeHandler = (e) => { 
//         const user = {...newUser}; //... means copy, make copy for newUser
//         user[e.target.name] = e.target.value; //[e.target.name]: is the field name //[e.target.value]:field that I'm currently typing in 
//         console.log(user);
//         setNewUser(user);
//     }

//     const registerHandler = () => {
//         props.register(newUser)
//     }

//   return (
//     <div>
//       <br></br>
//       <br></br>
//       <br></br>
//         <h1>Sign up</h1>
//         <Container>
//             <Form.Group>
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control name="firstName" onChange={changeHandler}></Form.Control>
//             </Form.Group>
//             <Form.Group>
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control name="lastName" onChange={changeHandler}></Form.Control>
//             </Form.Group>
//             <Form.Group>
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control name="emailAddress" onChange={changeHandler}></Form.Control>
//             </Form.Group>
//             <Form.Group>
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
//             </Form.Group>
//             <br></br>
//             <Button variant='primary' onClick={registerHandler} >Register</Button>
//         </Container>
//     </div>
//   )
// }


