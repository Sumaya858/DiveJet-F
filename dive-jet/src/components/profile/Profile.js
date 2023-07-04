import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


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
        const response =  await axios.get('course/index',
        {
            headers: {
                "Authorization": "Bearer "+ localStorage.getItem("token")
            }
        }
        )
        console.log(response)
        setCourses(response.data)
    }

  return (
    <>
    <div>
        <p>First Name:  {prof.firstName}</p>
        <p>Last Name:  {prof.lastName}</p>
        <p>Email:  {prof.emailAddress}</p>
        
    </div>

    </>


// <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol lg="6" className="mb-4 mb-lg-0">
//             <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
//               <MDBRow className="g-0">
//                 <MDBCol md="4" className="gradient-custom text-center text-white"
//                   style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                   <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                     alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
//                   <MDBTypography tag="h5">{prof.firstName} {prof.lastName}</MDBTypography>
//                   {/* <MDBCardText>Web Designer</MDBCardText>
//                   <MDBIcon far icon="edit mb-5" /> */}
//                 </MDBCol>
//                 <MDBCol md="8">
//                   <MDBCardBody className="p-4">
//                     <MDBTypography tag="h6">Information</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText className="text-muted">{prof.emailAddress}</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Phone</MDBTypography>
//                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>

//                     <MDBTypography tag="h6">Courses</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText className="text-muted">info@example.com</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Phone</MDBTypography>
//                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBCardBody>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>








  )
}




