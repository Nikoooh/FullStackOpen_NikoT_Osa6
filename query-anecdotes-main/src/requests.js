import axios from 'axios'
const url = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

export const getAnecdotes = () => {
    return axios.get(url).then(res => res.data)
}

export const createAnecdote = content => {
    const newAnecdote = { content: content, id: getId(), votes: 0 }
    return axios.post(url, newAnecdote).then(res => res.data)
}

export const updateAnecdote = newContent => {
    return axios.put(`${url}/${newContent.id}`, newContent).then(res => res.data)
}
