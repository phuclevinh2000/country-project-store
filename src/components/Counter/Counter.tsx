import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import addCounter from '../../redux/actions/counter'
import { useSelector } from 'react-redux'
import { AppState } from '../../types/types'
// import { fetchData } from '../../redux/actions/country'
import useCountry from '../../hooks/useCountries'

const Counter : React.FC= () => {
  useCountry()
  const count = useSelector((state: AppState) => state.counter.count)
  const dispatch = useDispatch()
  // const [nuoc, setNuoc] = useState([])

  // useSelector((state: AppState) => state.countries.allCountries.map((result) => (
  //   `${setNuoc(result)}`
  // ))) 
  
  const handleClick = () => {
    dispatch(addCounter())
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Add number</button>
    </div>
  )
}

export default Counter
