import axios from 'axios'
const url = 'http://localhost:3001/anecdotes'

const getAnecdotes = async () => {
    const request = await axios.get(url)
    return request.data
}

const newAnecdote = async anecdote => {
    const request = await axios.post(url, anecdote)
    return request.data
}

const vote = async (id, votes) => {
    const request = await axios.patch(`${url}/${id}`, {
        votes: votes + 1
    })
    return request.data
}

const anecdoteServices = {
    getAnecdotes,
    newAnecdote,
    vote
}

export default anecdoteServices