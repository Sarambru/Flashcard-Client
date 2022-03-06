import React from 'react'

// import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const FlashcardForm = ({ handleSubmit, title, description, setTitle, setDescription }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='title'>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder='A Wonderful Film'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='description'>
      <Form.Label>Description</Form.Label>
      <Form.Control
        placeholder='Description'
        name='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
    </Form.Group>
    <Button className='mt-2' variant='primary' type='submit'>Submit</Button>
  </Form>
)

export default FlashcardForm
