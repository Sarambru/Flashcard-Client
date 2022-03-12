import React from 'react'
import './/..//../css/FlashcardForm.scss'

// import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const FlashcardForm = ({ handleSubmit, title, body, subject, setTitle, setBody, setSubject }) => (
  <div className='form-box'>
    <Form className='form-box' onSubmit={handleSubmit} >
      <Form.Group className='form-box' controlId='title'>
        <Form.Label className='form-box' class='f-label'>Front</Form.Label>
        <Form.Control className='form-box'
          placeholder='Study word'
          name='title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='body' className='form-box' >
        <Form.Label class='f-label'>Back</Form.Label>
        <Form.Control className='form-box'
          placeholder='Body'
          name='body'
          value={body}
          onChange={event => setBody(event.target.value)}
        />
      </Form.Group>
      <Form.Group className='form-box' controlId='subject'>
        <Form.Label class='f-label'>Subject</Form.Label>
        <Form.Control className='form-box'
          placeholder='Enter Subject Here'
          name='subject'
          value={subject}
          onChange={event => setSubject(event.target.value)} />
      </Form.Group>
      <Button className='mt-2' variant='primary' type='submit'>Add Flashcard</Button>
    </Form>
  </div>
)

export default FlashcardForm
