/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react'

const NotificationContext = createContext()

const notificationReducer = (state, action) => {
    switch(action.type) {
        case 'notification':
            return action.payload.content
        case 'nullification':
            return null
        case 'error':
            return action.payload.content
        default: 
            return state
    }   
}

export const NotificationContextProvider = (props) => {

    const [notification, notificationDispatch] = useReducer(notificationReducer, null)

    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotificationVal = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
}

export default NotificationContext