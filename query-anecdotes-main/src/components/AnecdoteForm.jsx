import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'
import { useNotificationDispatch } from '../context/AnecdoteContext'

const AnecdoteForm = () => {
  
  const queryClient = useQueryClient()
  const newMutation = useMutation({ mutationFn: createAnecdote })

  const dispatch = useNotificationDispatch()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
  
    newMutation.mutate(content, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
        dispatch({type: "notification", payload: {content: `anecdote '${content}' created`}});
        setTimeout(() => {
          dispatch({type: "nullification"});
        }, 5000)
      },
      onError: () => {    
        dispatch({type: "error", payload: {content: "too short anecdote, must have length of 5 or more"}})
        setTimeout(() => {
          dispatch({type: "nullification"});
        }, 5000)
      }
    })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
