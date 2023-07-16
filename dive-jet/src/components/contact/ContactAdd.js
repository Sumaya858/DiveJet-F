import React, { useState } from 'react'
import axios from 'axios'


export default function ContactAdd() {

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
    <>
    <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
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
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                />
            </div>

            
            <div>
                <input
                    type="submit"
                    value="Add Message!"
                    onChange={handleChange}
                />
            </div>
        </form>
        </>
  )
}