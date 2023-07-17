import React, { useState } from 'react'
import axios from 'axios'


export default function FeedbackAdd() {

    const [newFeedback, setNewFeedback] = useState ({})
    const [message, setMessage] = useState ('')

    function handleChange (event) {
        const attribute = event.target.name
        const value = event.target.value

        const currentNewFeedback = {...newFeedback}

        currentNewFeedback[attribute] = value 
        console.log(currentNewFeedback)
        setNewFeedback(currentNewFeedback)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
        const response = await axios.post('feedback/add', newFeedback) 
        console.log('Response', response)

       
            if(response.status === 201){
                setMessage('Thank You For Your Feedback✅')
            } else {
                setMessage('hmmm, May not worked contact support')
            }
        } catch (error) {
            setMessage('didnt work')
        }

    }
  return (
    <>
    <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Your Feedback</label>
                <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                />
            </div>

            
            <div>
                <input
                    type="submit"
                    value="Thank You For Your Feedback ✅!"
                    onChange={handleChange}
                />
            </div>
        </form>
        <p>{message}</p>
        </>
  )
}