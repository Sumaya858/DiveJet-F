import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput} from 'mdb-react-ui-kit';

export default function Signin(props) {
    
    const [newUser, setNewUser] = useState({}); 
    const navigate = useNavigate();



    const changeHandler = (e) => { 
        const user = {...newUser}; 
        user[e.target.name] = e.target.value; //[e.target.name]: is the field name //[e.target.value]:field that I'm currently typing in 
        console.log(user);
        setNewUser(user);
    }

    const loginHandler = () => {
        props.login(newUser)
        navigate('/')

    }

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5 center' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

              <div className="d-flex flex-row align-items-center mb-4" >
                <p>Your Email</p>&nbsp;&nbsp;&nbsp;
                <MDBInput id='form2' type='email' name="emailAddress" onChange={changeHandler}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
              <p>Password</p>&nbsp;&nbsp;&nbsp;
                <MDBInput id='form3' name="password" type="password" onChange={changeHandler}/>
              </div>

              <button className="checkoutBtn"  onClick={loginHandler} >Log in</button>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              {/* <MDBCardImage src='https://i.pinimg.com/originals/30/48/58/30485866edfa12067101718b823fd37e.gif' fluid/> */}
              {/* <MDBCardImage src='https://i.pinimg.com/originals/fe/4b/c3/fe4bc367c796f800a0897599c2ba2022.gif' fluid/> */}
              <MDBCardImage src='https://gifdb.com/images/high/ponyo-and-sosuke-underwater-d0z30es7jdmzyd5m.gif' fluid/>
              {/* <MDBCardImage src='https://kornati-diving.com/wp-content/uploads/2023/03/diver-anim-1.gif'  style={{ width: '400px' }} fluid/> */}
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

