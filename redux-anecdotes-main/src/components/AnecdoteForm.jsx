import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

  const getId = () => (100000 * Math.random()).toFixed(0)

  const dispatch = useDispatch()
  const handleNew = (e) => {
    e.preventDefault()

    const id = getId()

    dispatch(createAnecdote({content: e.target.anecdoteContent.value, id: id, votes: 0}))
  
    dispatch(setNotification(`new anecdote ${e.target.anecdoteContent.value} created`, 5))

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