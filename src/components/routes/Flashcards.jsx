
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'
import { indexFlashcards } from '../../api/flashcards'

const Flashcards = ({ user, msgAlert }) => {
  const [flashcards, setFlashcards] = useState(null)

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  // Run once, when the component mounts
  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await indexFlashcards(user)
        setFlashcards(res.data.flashcards)
      } catch (error) {
        msgAlert({
          heading: 'Flashcard List failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  // 3 states:
  if (!flashcards) {
    // If movie is `null`, we are loading
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (flashcards.length === 0) {
    // If the array of movies is empty, we have no movies to show
    return <h1>No flashcards yet, go make some!</h1>
  } else {
    // Otherwise, display the movies
    const flashcardsList = flashcards.map(flashcard => (
      <li key={flashcard._id}>
        <Link to={`/flashcards/${flashcard._id}`}>{flashcard.title}</Link>
      </li>
    ))

    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>Flashcards</h3>
          <ul>{flashcardsList}</ul>
        </div>
      </div>
    )
  }
}

export default Flashcards
