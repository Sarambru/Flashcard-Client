import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'

import { deleteFlashcard, showFlashcard } from '../../api/flashcards'

const Flashcard = ({ user, msgAlert }) => {
  const [flashcard, setFlashcard] = useState(null)
  const [deleted, setDeleted] = useState(false)
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
        setFlashcard(res.data.flashcard)
      } catch (error) {
        msgAlert({
          heading: 'Flashcard failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleDeleteClick = async () => {
    try {
      await deleteFlashcard(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete movie',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // 3 states:
  // If movie is `null`, we are loading
  if (!flashcard) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/flashcards' />
  } else {
    // We have a movie, display it!
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>{flashcard.title}</h3>
          <p>Description: {flashcard.body}</p>
          <Button variant='danger' onClick={handleDeleteClick}>Delete Flashcard</Button>
          <Link to={`/flashcards/${id}/edit`}>
            <Button variant='primary' type='submit'>Update Flashcard</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Flashcard
