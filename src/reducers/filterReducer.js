export const filterReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: "" }
    case 'FETCH_SUCCESS':
      let list = [];
      if (state.filter !== 'all') {
        action.payload.forEach((elem) => {
          if (elem.tags.includes(state.filter)) {
            list.push({
              colorStart: elem.start,
              colorEnd: elem.end,
              name: elem.name,
              tags: elem.tags,
              id: elem.id
            })
          }
        })
      } else {
          for (let i = 0; i < action.payload.length; i++) {
            list.push({
              colorStart: action.payload[i].start,
              colorEnd: action.payload[i].end,
              name: action.payload[i].name,
              tags: action.payload[i].tags,
              id: action.payload[i].id
            })
          }
      }
      return {...state, gradients: list, loading: false, error: "" }
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'FILTER_CHANGE':
      return {...state, filter: action.payload}
    default:
      throw new Error(`Unsupported action type ${action.type} in userReducer`)
  }
}