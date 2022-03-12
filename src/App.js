/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

// component imports
import Home from './components/routes/Home'
import Flashcard from './components/routes/Flashcard'
import FlashcardCreate from './components/routes/FlashcardCreate'
import FlashcardEdit from './components/routes/FlashcardEdit'
import Flashcards from './components/routes/Flashcards'
import Nav from './components/routes/Nav'
import FlashcardStudy from './components/routes/FlashcardStudy'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }
  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <Nav />
      <main className='container'>
        <Routes>
          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-out'
            element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /> }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} /> }
          />
          <Route path='/' element={<Home />}/>
          <Route path='/flashcards' element={
            <Flashcards msgAlert={msgAlert} user={user} />
          } />
          <Route path='flashcards/:id' element={<Flashcard msgAlert={msgAlert} user={user} />} />
          <Route path = '/flashcards/create' element={<FlashcardCreate msgAlert={msgAlert} user={user} />}/>
          <Route path='/flashcards/:id/edit' element={<FlashcardEdit msgAlert={msgAlert} user={user} />} />
          <Route path='/flashcards/create' element={<FlashcardCreate msgAlert={msgAlert} user={user} />} />
          <Route path='/flashcards/study' element={<FlashcardStudy msgAlert={msgAlert} user={user} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
