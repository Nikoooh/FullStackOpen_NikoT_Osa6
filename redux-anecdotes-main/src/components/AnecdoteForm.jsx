import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const handleNew = (e) => {
        e.preventDefault()
        dispatch(newAnecdote(e.target.anecdoteContent.value))
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