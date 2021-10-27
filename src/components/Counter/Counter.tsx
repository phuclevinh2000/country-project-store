import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppState } from '../../types/types'
// import { fetchData } from '../../redux/actions/country'
import useCountry from '../../hooks/useCountries'

const Counter : React.FC= () => {
  // useCountry()
  // const count = useSelector((state: AppState) => state.counter.count)
  // const dispatch = useDispatch()
  // const country = useSelector((state: AppState) => state.countries.allCountries)

  // const handleClick = () => {
  //   dispatch(addCounter())
  // }

  return (
    <div>
      {/* <p>{count}</p>
      <button onClick={handleClick}>Add number</button>
      <p>
        {country.map((value) => 
          value.languages.map((element) => (
            element.name
          ))
        )}
      </p>             */}
    </div>
  )
}

export default Counter
