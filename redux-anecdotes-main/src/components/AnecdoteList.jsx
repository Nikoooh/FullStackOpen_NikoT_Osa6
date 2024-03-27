import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { resetNotification, notification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => {
    if (state.filter === 'ALL') {
      return [...state.anecdote].sort((a, b) => b.votes - a.votes)
    } else {
      return [...state.anecdote].sort((a, b) => b.votes - a.votes).filter((a) => a.content.toLowerCase().includes(state.filter.toLowerCase()))
    }
  })

  const dispatch = useDispatch()
  const anecVote = (id) => {
    dispatch(vote(id))
    dispatch(notification(`you voted ${anecdotes.find(a => a.id === id).content}`))
      setTimeout(() => {
        dispatch(resetNotification())
    }, 5000)
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            {anecdote.votes}
            <button onClick={() => anecVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList