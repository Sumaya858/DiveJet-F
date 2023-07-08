// import React from 'react';
import React, { useState } from 'react'
import axios from 'axios'

export default function Course() {


  // const [newCourses, setNewCourses] = useState({})
    const [message, setMessage] = useState ('')

    

    const handleBegSubmit = async (event) => {
      // event.preventDefault()
      console.log("Test", localStorage.getItem("token"))
      const response = await axios.post('courses/add', {"level": "Beginners"} ,{
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      console.log(response)
    
      if (response.status === 201){
        setMessage('Your Course Has Been Added ✔️')
      } else {
        setMessage('Something Went Wrong')
      }
    }

    const handleAdvSubmit = async (event) => {
      event.preventDefault()
    
      const response = await axios.post('courses/add', {"level": "Advance"} ,{
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      console.log(response)
    
      if (response.status === 201){
        setMessage('Your Course Has Been Added ✔️')
      } else {
        setMessage('Something Went Wrong')
      }
    }

    const handleProfSubmit = async (event) => {
      event.preventDefault()
    
      const response = await axios.post('courses/add', {"level": "Professional"} ,{
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      console.log(response)
    
      if (response.status === 201){
        setMessage('Your Course Has Been Added ✔️')
      } else {
        setMessage('Something Went Wrong')
      }
    }


  return (
    <div className='courseback'>
      <br />
      <br />

      <div className="container1">
        <div className="card1">
          <div className="header1">
            <img src="https://images.unsplash.com/photo-1496161341410-90ce6ad8b390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="b" />
          </div >
          <div className="descr">
            <div className='test' ><h2>Beginner</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <input className='joinb' type="submit" value="Join" onClick={handleBegSubmit} />
              </div>
            <details>
                <summary>View Course Details</summary>
            <p className='p1'>
            This course is designed for individuals who are interested in learning how to scuba dive but do not have any prior experience.<br></br><br></br><strong>Duration ⌛ :</strong>  Three months. <br></br><br></br><strong>Price 🏷️ :</strong> 150 BHD.
            </p>
          
            </details>
            <br></br>
            {/* <div>
                    <input
                        // name="Beginners"
                        className='joinb'
                        type="submit"
                        value="Join"
                        onClick={handleBegSubmit}
                    />
            </div> */}

            <br></br>
          </div>
        <p className='p1'>{message}</p>

        </div>


<br></br>



        <div className="card1">
          <div className="header1">
            <img src="https://images.unsplash.com/photo-1579519383430-8c4ef629b96c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="ad" />
          </div>
          <div className="descr">
            <div className='test'>
            <h2>Advance</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <input className='joinb' type="submit" value="Join" onClick={handleAdvSubmit} />
            </div>
            <details>
                <summary>View Course Details</summary>
            <p className='p1'>
            This course will provide you with advanced techniques and knowledge to enhance your diving abilities and allow you to explore deeper waters and more challenging dive sites. Our experienced instructors will work with you to develop your skills and ensure that you feel confident and prepared for any diving situation.<br></br><br></br><strong>Duration ⌛ :</strong>  Three months. <br></br><br></br><strong>Price 🏷️ :</strong> 150 BHD.
            </p>
            </details>
            {/* <div>
              <br></br>
                    <input
                        className='joinb'
                        type="submit"
                        value="Join"
                        onClick={handleAdvSubmit}
                    />

                </div> */}

          </div>
        <p className='p1'>{message}</p>

        </div>


<br></br>

        <div className="card1">
          <div className="header1">
            <img src="https://images.unsplash.com/photo-1563186626-657401e33186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="p" />
          </div>
          <div className="descr">
            <div className='test'>
              
            <h2>Professional</h2>&nbsp; 
            <input className="joinb" type="submit" value="Join" onClick={handleProfSubmit} />


            {/* <input className="joinb btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" type="submit" value="Join" onClick={handleProfSubmit} />
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true">

              <div className="modal-dialog modal-dialog-centered" role="document">


                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Diving Courses</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  Your Course Has Been Added Succesfully
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div> */}
            
            </div>
            <details>
                <summary>View Course Details</summary>
            <p className='p1'>
            Our professional scuba diving course is designed for individuals who are looking to pursue scuba diving as a career or take their skills to the highest level. This course will provide you with the necessary knowledge and training to become a professional scuba diver and open doors to many exciting career opportunities. Our experienced instructors will guide you through the process and ensure that you are fully prepared to take on the challenges of the professional diving world.<br></br><br></br><strong>Duration ⌛ :</strong>  Three months. <br></br><br></br><strong>Price 🏷️ :</strong> 150 BHD.
            </p>
            </details>
            {/* <div  className='joinb'>
              <br></br>
                    <input
                        className='joinb'
                        type="submit"
                        value="Join"
                        onClick={handleProfSubmit}
                    />

                </div>   */}
          </div>
        {/* <p className='p1'>{message}</p> */}
        

        </div>


<br></br>
        </div>
          <br></br>
          <br></br>
          <br></br>
    </div>
  );
  }
