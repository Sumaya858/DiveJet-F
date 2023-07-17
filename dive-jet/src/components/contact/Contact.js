import React, { useState } from 'react'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

export default function Contact1() {

  
  const [newContact, setNewContact] = useState ({})
  const [message, setMessage] = useState ('')

  function handleChange (event) {
      const attribute = event.target.name
      const value = event.target.value

      const currentNewContact = {...newContact}

      currentNewContact[attribute] = value 
      console.log(currentNewContact)
      setNewContact(currentNewContact)
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      const response = await axios.post('contact/add', newContact) 
      console.log(response)

      try{
          if(response.status === 201){setMessage(' it worked!')} else {setMessage('hmmm, May not worked contact support')}
      } catch (error) {
          setMessage('didnt work')
      }

  }

  
  return (

    <div className='contact1'>
    <div className='contactTitle'>
      <br></br>
      <br></br>
    <h2>Keep In Touch With Us</h2>
    {/* <h5></h5> */}
    </div>

    <br></br>

    <div>
    <div className="row">
      <div className="col-md-5">
        <div className="content">
          {/* Info-1 */}
          <div className="info">
          &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faMobile} />&nbsp;
            <h6 className="d-inline-block">PHONE :&nbsp;
                     
              <span>+97317558899</span>
            </h6>
          </div>
          {/* Info-2 */}
          <div className="info">
          &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelope} />&nbsp;
            <h6 className="d-inline-block">EMAIL :&nbsp;
                    
              <span>info@DiveJet.com</span>
            </h6>
          </div>
          {/* Info-3 */}
          <div className="info">
          &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>&nbsp;
               

            <h6 className="d-inline-block">Location :&nbsp;
                    
              <span>Building 1306, 346 Rd 4625, Manama</span>
            </h6>
          </div>
               
        </div>
      </div>
      </div>
    </div> 

    <br></br>

      <div className='message'>
      <div className="col-md-7">
      <form onSubmit={handleSubmit}>
         <div className="row enter">
           <h5>We'd love to hear from you!</h5> <br></br>
           {/* <div className="col-sm-6">
             <input type="text" className="form-control" placeholder="Name" />
           </div> */}
           <div className="col-sm-12">
             <input type="email" className="form-control" name='email' placeholder="Email" onChange={handleChange} />
           </div>
           </div>
           <div className="row enter">
           <div className="col-sm-12">
             <input type="text" className="form-control" name='title' placeholder="Subject" onChange={handleChange} />
           </div>
         </div>
         <div className="form-group">
           <textarea className="form-control" rows="5" id="comment" name='description' placeholder="Message" onChange={handleChange}></textarea>
         </div>
         <button className="btn btn-block" type="submit">Send</button>
       </form>
     </div>
      </div>
    
    </div>






    // <div>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    
    //   <section className="contact1" id="contact1">
    //     <div className="container1">
    //       <div className="heading text-center">
    //         <h2>Contact <span>Us</span></h2>
    //         <h5>We'd love to hear from you!</h5>
    //         <br/>
    //         <br/>
    //         <br/>
    //         <br/>
    //         <br/>
    //         <br/>
    //         <br/>
    //         <br/>
    //         <br/>
    //         <br/>
    //         <br/>
    //        <h3>Keep In Touch With Us</h3>
    //       </div>
    //       <div className="row">
    //         <div className="col-md-5">
    //           {/* <div className="title">
                
               
    //           </div> */}
    //           <div className="content">
    //             {/* Info-1 */}
    //             <div className="info">
    //             &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faMobile} />&nbsp;
    //               <h4 className="d-inline-block">PHONE :&nbsp;
                     
    //                 <span>+12457836913 , +12457836913</span>
    //               </h4>
    //             </div>
    //             {/* Info-2 */}
    //             <div className="info">
    //             &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelope} />&nbsp;
    //               <h4 className="d-inline-block">EMAIL :&nbsp;
                    
    //                 <span>info@DiveJet.com</span>
    //               </h4>
    //             </div>
    //             {/* Info-3 */}
    //             <div className="info">
    //             &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>&nbsp;
               

    //               <h4 className="d-inline-block">Location :&nbsp;
                    
    //                 <span>Wadren Castle , 555 Street.</span>
    //               </h4>
    //             </div>
               
    //           </div>
    //         </div>

    //         <div className="col-md-7">
    //           <form>
    //             <div className="row">
    //               <div className="col-sm-6">
    //                 <input type="text" className="form-control" placeholder="Name" />
    //               </div>
    //               <div className="col-sm-6">
    //                 <input type="email" className="form-control" placeholder="Email" />
    //               </div>
    //               <div className="col-sm-12">
    //                 <input type="text" className="form-control" placeholder="Subject" />
    //               </div>
    //             </div>
    //             <div className="form-group">
    //               <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
    //             </div>
    //             <button className="btn btn-block" type="submit">Send Now!</button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    //   <br/>
    // </div>
    
  );

}




// import React from 'react'

// import { Container, Form, Button } from "react-bootstrap"
// // import index from './HTML/index.html'
// import ContactAdd from './ContactAdd'


// export default function Contact() {
//   return (
//     <div className='timing'>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>

//     <h4>working Hour</h4>
//     <p>Sunday to Thuresday: 7:00 Am to 5:00Pm </p>

//     <h4>Phone Number</h4>
//     <p>+97317558899</p>

//     <h4>Email Address</h4>
//     <p>info@divejet.com</p>

//     <h4>Location</h4>
    

//     <div>
//       <br></br>
//       <br></br>
//       <br></br>

//     <h2>Happy to hear from you </h2>
//         <Container>
//              <ContactAdd/>
//          </Container>
//     </div>
// </div>
//   )
// }