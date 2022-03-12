import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'
import { indexFlashcards } from '../../api/flashcards'
import '..//../css/FlashcardForm.scss'
import '..//../css/FlashcardStudy.scss'

const FlashcardStudy = ({ user, msgAlert }) => {
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
      <>
        <div className='flip-card' id='wrapper'key={flashcard._id}>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              {flashcard.title}
            </div>
            <div id='deck-elements'>
              <div className='show-title'>
                {flashcard.title}
              </div>
              <div className='flip-card-back'>
                {flashcard.body}
              </div>
            </div>
          </div>
        </div>
      </>
    ))
    return (
      <div id='deck-container' className='row'>
        <h3>Study</h3>
        <ul id='grid-ul'>{flashcardsList}</ul>
      </div>
    )
  }
}

export default FlashcardStudy
