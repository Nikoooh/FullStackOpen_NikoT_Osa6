import { useContext } from "react"
import NotificationContext, { useNotificationVal } from "../context/AnecdoteContext"

const Notification = () => {

  const notification = useNotificationVal()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  return (
    <div>
      {(notification) ?
        <div style={style}>
          {notification}
        </div>       
      :
        <></>
      }
      
    </div>
  )
}

export default Notification
