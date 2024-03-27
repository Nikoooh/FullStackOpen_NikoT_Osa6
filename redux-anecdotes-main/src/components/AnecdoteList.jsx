import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => {
    if (state.filter === 'ALL') {
      return [...state.anecdote].sort((a, b) => b.votes - a.votes)
    } else {
      return [...state.anecdote].sort((a, b) => b.votes - a.votes).filter((a) => a.content.toLowerCase().includes(state.filter.toLowerCase()))
    }
  })

  const dispatch = useDispatch()

  const anecVote = (id, votes) => {
    dispatch(addVote(id, votes))
    dispatch(setNotification(`you voted ${anecdotes.find(a => a.id === id).content}`, 5))
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
            <button onClick={() => anecVote(anecdote.id, anecdote.votes)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList