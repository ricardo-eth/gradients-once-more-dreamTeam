export const filterReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: "" }
    case 'FETCH_SUCCESS':
      return { gradients: action.payload, loading: false, error: "" }
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'FILTER_CHANGE':
      return {...state, filter: action.payload}
    default:
      throw new Error(`Unsupported action type ${action.type} in userReducer`)
  }
}