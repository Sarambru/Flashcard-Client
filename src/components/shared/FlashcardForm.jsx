import React from 'react'

// import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const FlashcardForm = ({ handleSubmit, title, body, subject, setTitle, setBody, setSubject }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='title'>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder='Study word'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='body'>
      <Form.Label>Body</Form.Label>
      <Form.Control
        placeholder='Body'
        name='body'
        value={body}
        onChange={event => setBody(event.target.value)}
      />
    </Form.Group>
    <Form.Group controlId='subject'>
      <Form.Label>Subject</Form.Label>
      <Form.Control
        placeholder='Enter Subject Here'
        name='subject'
        value={subject}
        onChange={event => setSubject(event.target.value)} />
    </Form.Group>
    <Button className='mt-2' variant='primary' type='submit'>Submit</Button>
  </Form>
)

export default FlashcardForm
