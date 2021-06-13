import {createContext, useContext, useEffect, useReducer, useState} from "react"
import { filterReducer } from "../reducers/filterReducer"
import { useIsMounted } from "../hooks/useIsMounted"

function allTags(tags) {
 
  let listTotal = []
  /* retourner la liste des tags uniques */
  for (let element of tags) {
    if ("tags" in element) {
      listTotal = listTotal.concat(element.tags);
    }
  }
  const listTagsUnique = [];
  listTotal.forEach((el) => {
    if (!listTagsUnique.includes(el)) {
      listTagsUnique.push(el);
    }
  });

  return listTagsUnique;
}

export const FilterContext = createContext()

const initialState = {
  gradients: [{}],
  filter: {
    color: "all",
    gradients: [{
    name: "",
    colorStart: "",
    colorEnd: "",
    tags: [],
    id: "",
    }]
  },
  loading: false,
  error: "",
}

export const FilterContextProvider = ({children}) => {
  const [colors, setColors] = useState([])
  const [state, dispatch] = useReducer(filterReducer, initialState)
  const { gradients, loading, error, filter, index } = state
  const isMounted = useIsMounted()
  

  useEffect(() => {
    dispatch({type: 'FETCH_INIT'})
    fetch("https://gradients-api.herokuapp.com/gradients", {
      method: 'GET',
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error(`Something went wrong ${response.statusText}`)
      }
      return response.json()
    })
    .then((result) => {
        if (isMounted.current) {
        dispatch({type: 'FETCH_SUCCESS', payload: result})
        setColors(allTags(result))
        }
        
      })
      .catch((error) => {
        console.error(error.message)
        if (isMounted.current) {
          dispatch({type: 'FETCH_FAILURE', payload: error.message})
        }
      })
  }, [isMounted]) 

  
  return (
    <FilterContext.Provider value={{ colors, gradients, filter, loading, error, index, dispatch}}>
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


