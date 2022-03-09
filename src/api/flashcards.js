import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexFlashcards = (user) => {
  return axios.get(apiUrl + '/flashcards/', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showFlashcard = (id, user) => {
  return axios.get(`${apiUrl}/flashcards/${id}/`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteFlashcard = (id, user) => {
  return axios.delete(`${apiUrl}/flashcards/${id}/`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateFlashcard = (id, title, body, subject, user) => {
  return axios.patch(
    `${apiUrl}/flashcards/${id}/`,
    { flashcard: { title, body, subject } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const createFlashcard = (title, body, subject, user) => {
  return axios.post(
    `${apiUrl}/flashcards/create/`,
    { flashcard: { title, body, subject } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
