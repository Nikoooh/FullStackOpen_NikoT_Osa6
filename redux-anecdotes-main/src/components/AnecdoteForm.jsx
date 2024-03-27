import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { resetNotification, notification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()
  const handleNew = (e) => {
    e.preventDefault()
    dispatch(newAnecdote(e.target.anecdoteContent.value))
    dispatch(notification(`new anecdote ${e.target.anecdoteContent.value} created`))
    setTimeout(() => {
      dispatch(resetNotification())
    }, 5000)

    e.target.anecdoteContent.value = ''
    
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleNew}>
        <div><input name='anecdoteContent'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm