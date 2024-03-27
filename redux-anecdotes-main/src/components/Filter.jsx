import { useDispatch } from "react-redux";
import { anecdoteFilter } from "../reducers/filterReducer";

const Filter = () => {

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(anecdoteFilter(e.target.value))
  }
  
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={(e) => handleChange(e)} />
    </div>
  )
}
  
export default Filter