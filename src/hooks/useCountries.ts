import { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../redux/actions/country'

const useCountry =  (): void => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
   
}

export default useCountry