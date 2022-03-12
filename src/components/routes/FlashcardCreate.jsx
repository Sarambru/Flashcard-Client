import React, { useState } from 'react'

import { Navigate } from 'react-router-dom'

import FlashcardForm from '../shared/FlashcardForm'
import { createFlashcard } from '../../api/flashcards'
import '..//../css/FlashcardForm.scss'

const FlashcardCreate = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [subject, setSubject] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createFlashcard(title, body, subject, user)
      setCreatedId(res.data.flashcard._id)

      msgAlert({
        heading: 'Flashcard Created',
        message: `Created ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to create Flashcard',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if flashcard has been created,Navigate to the 'show' page
    return <Navigate to={`/flashcards/${createdId}`} />
  }
  return (
    <div className='form-box'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3 id='create-flashcard'>Create Flashcard</h3>
        <FlashcardForm className='form-box' handleSubmit={handleSubmit}
          title={title}
          body={body}
          subject={subject}
          setTitle={setTitle}
          setBody={setBody}
          setSubject={setSubject}
        />
      </div>
    </div>
  )
}

export default FlashcardCreate
