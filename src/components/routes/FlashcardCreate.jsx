import React, { useState } from 'react'

import { Navigate } from 'react-router-dom'

import FlashcardForm from '../shared/FlashcardForm'
import { createFlashcard } from '../../api/flashcards'

const FlashcardCreate = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createFlashcard(title, user)
      setCreatedId(res.data.movie._id)

      msgAlert({
        heading: 'Flashcard Created',
        message: `Created ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to create movie',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if movie has been created,Navigate to the 'show' page
    return <Navigate to={`/flashcards/${createdId}`} />
  }
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create Movie</h3>
        <FlashcardForm
          handleSubmit={handleSubmit}
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={ setDescription }
        />
      </div>
    </div>
  )
}

export default FlashcardCreate
