// import React from 'react';
import React, { useState } from 'react'
import axios from 'axios'

export default function Course() {


  const [newCourses, setNewCourses] = useState({})
    const [userMessage, setUserMessage] = useState('')
    

    const handleChange = (event) => {
        const attribute = event.target.name
        const value = event.target.value
        console.log(attribute, value)

        const currentNewCourses = {...newCourses}
        
        currentNewCourses[attribute] = value
        
        setNewCourses(currentNewCourses)
        console.log(newCourses)
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
    
      if (newCourses.chronicDisease) {
        setUserMessage('Sorry, you cannot join if you have a chronic disease.')
        return
      }
    
      const response = await axios.post('courses/add', newCourses)
      console.log(response)
    
      if (response.status === 201){
        setUserMessage('Your Course Has Been Added ✔️')
      } else {
        setUserMessage('Something Went Wrong')
      }
    }
    const handleAge = async (event) => {
      const age = event.target.value
    
      if (age < 13) {
        setUserMessage('Sorry, you must be at least 13 years old to use this service.')
      } else {
        setUserMessage('')
      }
    
      setNewCourses({
        ...newCourses,
        age: age
      })
    }
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="card">
          <div className="header">
            <img src="https://images.unsplash.com/photo-1563967949-d97cba787cae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=861&q=80" alt="b" />
          </div>
          <div className="descr">
            <h2>Beginner</h2>
            <details>
                <summary>View Course Details</summary>
            <p>
            This course is designed for individuals who are interested in learning how to scuba dive but do not have any prior experience.<br></br><strong>Duration ⌛ :</strong>  Three months. <br></br><strong>Price 🏷️ :</strong> 150 BHD.
            </p>
          
            </details>
            <div>
                    <input
                        type="submit"
                        value="Join"
                        onChange={handleChange}
                    />

                </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>

        <div className="card">
          <div className="header">
            <img src="https://images.unsplash.com/photo-1579519383430-8c4ef629b96c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="ad" />
          </div>
          <div className="descr">
            <h2>Advance</h2>
            <details>
                <summary>View Course Details</summary>
            <p>
            This course will provide you with advanced techniques and knowledge to enhance your diving abilities and allow you to explore deeper waters and more challenging dive sites. Our experienced instructors will work with you to develop your skills and ensure that you feel confident and prepared for any diving situation.<br></br><strong>Duration ⌛ :</strong>  Three months. <br></br><strong>Price 🏷️ :</strong> 150 BHD.
            </p>
            </details>
            <div>
                    <input
                        type="submit"
                        value="Join"
                        onChange={handleChange}
                    />

                </div>
          </div>
        </div>

        <div className="card">
          <div className="header">
            <img src="https://images.unsplash.com/photo-1563186626-657401e33186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="p" />
          </div>
          <div className="descr">
            <h2>Professional</h2>
            <details>
                <summary>View Course Details</summary>
            <p>
            Our professional scuba diving course is designed for individuals who are looking to pursue scuba diving as a career or take their skills to the highest level. This course will provide you with the necessary knowledge and training to become a professional scuba diver and open doors to many exciting career opportunities. Our experienced instructors will guide you through the process and ensure that you are fully prepared to take on the challenges of the professional diving world.<br></br><strong>Duration ⌛ :</strong>  Three months. <br></br><strong>Price 🏷️ :</strong> 150 BHD.
            </p>
            </details>
            <div>
                    <input
                        type="submit"
                        value="Join"
                        onChange={handleChange}
                    />

                </div>
                
          </div>

        </div>
        


{/* 
        <h1>Add Course ➕ </h1>
        <div className='containerone'>

            <form onSubmit={handleSubmit}>
            <h4>Add Course ➕ </h4>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>E-mail</label>
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        type="text"
                        name="mobile"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Level</label>
                        <select name="level" onChange={handleChange}> 
                        <option value= ""
                        /> 
                        </select> 
                        <div className='container-chekbox'>
                        <label>Chronic disease &nbsp;</label>
                    <input
                        type="checkbox"
                        name="chronicdisease"
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Join"
                    />

                </div>
            </form>
            </div>
            </div>
            <p>{userMessage}</p>
       */}
          
    </div>
    <br></br>
          <br></br>
          <br></br>
    </div>
  );
}