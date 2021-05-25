import {createContext, useContext, useEffect, useReducer} from "react"
import { filterReducer } from "../reducers/filterReducer"
import { useIsMounted } from "../hooks/useIsMounted"

export const FilterContext = createContext()

const initialState = {
  gradients: [],
  loading: false,
  error: ""
}

export const FilterContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(filterReducer, initialState)
  const { gradients, loading, error } = initialState
  const isMounted = useIsMounted()

  useEffect(() => {
    dispatch({type: 'FETCH_INIT'})
    fetch(process.env.local.REACT_APP_GRADIENT_API_URL, {
      method: 'GET',
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error(`Something went wrong ${response.statusText}`)
      }
      return response.json()
    })
    .then((result) => {
      console.log(result)
        if (isMounted.current) {
        console.log(result)
        dispatch({type: 'FETCH_SUCCESS', payload: result})
        }
      })
      .catch((error) => {
        console.error(error.message)
        if (isMounted.current) {
          dispatch({type: 'FETCH_FAILURE', payload: error.message})
        }
      })
  }, []) 

  return (
    <FilterContext.Provider value={{ gradients, loading, error, dispatch}}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error(`You try to use FilterContext outside of its provider.`)
  }
  return context
}


