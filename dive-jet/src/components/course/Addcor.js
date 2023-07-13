import React, { useState } from 'react'
import axios from 'axios'

export default function BookCreate(){

    const [newBook, setNewBook] = useState({})
    const [userMessage, setUserMessage] = useState('')
    

    const handleChange = (event) => {
        const attribute = event.target.name
        const value = event.target.value
        console.log(attribute, value)

        const currentNewBook = {...newBook}
        
        currentNewBook[attribute] = value
        
        setNewBook(currentNewBook)
        console.log(newBook)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await axios.post('book/add', newBook)
        console.log(response)

        if (response.status === 201){
            setUserMessage('Your Book Has Been Added')
        } else {
            setUserMessage('Something Went Wrong')
        }
    }

    return (
        <div>
            <h1>Create Book!</h1>

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
                    <label>Genre</label>
                    <input
                        type="text"
                        name="genre"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Fiction?</label>
                    <input
                        type="text"
                        name="isFiction"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Pages</label>
                    <input
                        type="text"
                        name="numberOfPages"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Add Book!"
                    />
                </div>
            </form>
            <p>{userMessage}</p>
        </div>
    )
}