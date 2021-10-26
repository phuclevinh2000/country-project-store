import React from 'react'
import { useDispatch } from "react-redux";
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { actionCreators } from "../../redux"
// import { useSelector } from 'react-redux';


const Home : React.FC = () => {
  const dispatch = useDispatch()
  const {data, error, loading} = useTypedSelector((state) => state.countries) //to select return state from store
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(actionCreators.searchCountries());
  };
  // console.log(data)
  return (
    <div>
      <form onSubmit={onSubmit}>
        <button>Search</button>
      </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && 
          data.map((name) => <div key={name}>{name}</div>)
        }
    </div>
  )
}

export default Home
