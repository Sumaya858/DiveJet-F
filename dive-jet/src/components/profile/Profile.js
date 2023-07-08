import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';


export default function Profile() {

    const [prof, setProf] = useState([])
    const [courses, setCourses] = useState([])

    useEffect(() => { //runs every time something is updated in the page
        getProfile()
        getAllCourses()
    }, [])

    const getProfile = async () => {
        const response = await axios.get('profile/view', {
            headers: {
                "Authorization": "Bearer "+ localStorage.getItem("token")
            }
        }
        )
        console.log(response.data)
        setProf(response.data)
    }

    const getAllCourses = async () => {
        const response =  await axios.get('courses/index',
        {
            headers: {
                "Authorization": "Bearer "+ localStorage.getItem("token")
            }
        }
        )
        console.log(response.data)
        setCourses(response.data)

  

    }

    console.log(courses)
    const myCourses = courses.map(eachCourse => (
      <div key={eachCourse._id}>
        {/* <h5>My Course</h5> */}
        {/* <p> <h6>Level</h6> {eachCourse.level[0].name} <h6>Deep</h6> {eachCourse.level[0].deep} <h6>From</h6> {eachCourse.level[0].from} <h6>To</h6> {eachCourse.level[0].to}</p> */}
        <div className='course'>
        <p className='courseDetails'>Level: {eachCourse.level[0].name}</p>
        <p className='courseDetails'>Deep: {eachCourse.level[0].deep}</p>
        <p className='courseDetails'>From: {eachCourse.level[0].from}</p>
        <p className='courseDetails'>To: {eachCourse.level[0].to}</p>
        </div>
        <button className='del'>Delete</button>
        <p>______________________________ ____ ____ ____ ____ </p>
      </div>
    ))

    

  return (
    // <>
    // <br />
    // <br />
    // <div>
    //     <p>First Name:  {prof.firstName}</p>
    //     <p>Last Name:  {prof.lastName}</p>
    //     <p>Email:  {prof.emailAddress}</p>
    // </div>
        
    // <div>
    //     {myCourses}
    // </div>

    // <br />
    // <br />
    // </> width

<>
{/* <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}> */}
      {/* <MDBContainer className="py-5 h-100"> */}
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0" style={{ width: '1000px' , marginTop: '20px' }}>
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{prof.firstName} {prof.lastName}</MDBTypography>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{prof.emailAddress}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{prof.mobile}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      {/* </MDBContainer> */}
    {/* </section> */}

    {/* <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}> */}
      {/* <MDBContainer className="py-5 h-100"> */}
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0" style={{ width: '1000px'}}>
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  {/* <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" */}
                    {/* alt="Avatar" className="my-5" style={{ width: '80px' }} fluid /> */}
                  <MDBTypography tag="h5" className="my-5">My Diving Courses</MDBTypography>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Courses Details</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        {/* <MDBTypography tag="h6">Email</MDBTypography> */}
                        <MDBCardText className="text-muted"  style={{ display: 'inline' }}>{myCourses}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      {/* </MDBContainer> */}
    {/* </section> */}

    
</>
  )
}



                    {/* <MDBTypography tag="h6">Courses</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                    <MDBCardText className="text-muted">{myCourses}</MDBCardText> */}

                      {/* <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Level:</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Deep</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">From</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">To</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol> */}
                    {/* </MDBRow> */}