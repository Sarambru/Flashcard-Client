import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import FlashcardForm from '../shared/FlashcardForm'
import { showFlashcard, updateFlashcard } from '../../api/flashcards'

const FlashcardEdit = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showFlashcard(id, user)
        setTitle(res.data.flashcard.title)
        setDescription(res.data.flashcard.description)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load flashcard',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await updateFlashcard(id, title, description, user)
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to update flashcard',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (updated) {
    // Navigate to the 'show' page
    return <Navigate to={`/flashcards/${id}`} />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Edit Movie</h3>
        <FlashcardForm
          handleSubmit={handleSubmit}
          title={title}
          description={description}
          setTitle={setTitle}
          setDirector={setDescription}
        />
      </div>
    </div>
  )
}

export default FlashcardEdit
