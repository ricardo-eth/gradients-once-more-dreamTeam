export const filterReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: "" }
    case 'FETCH_SUCCESS':
      let listInit = [];
      for (let i = 0; i < action.payload.length; i++) {
            listInit.push({
              colorStart: action.payload[i].start,
              colorEnd: action.payload[i].end,
              name: action.payload[i].name,
              tags: action.payload[i].tags,
              id: action.payload[i].id
            })
          }
      return {...state, gradients: listInit, filter:{color: "all", gradients: listInit}, loading: false, error: "" }
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'FILTER_CHANGE':
      let list = [];
      if (action.payload !== 'all') {
        state.gradients.forEach((elem) => {
          if (elem.tags.includes(action.payload)) {
            list.push({
              colorStart: elem.colorStart,
              colorEnd: elem.colorEnd,
              name: elem.name,
              tags: elem.tags,
              id: elem.id
            })
          }
        })
      } else {
          for (let i = 0; i < state.gradients.length; i++) {
            list.push({
              colorStart: state.gradients[i].colorStart,
              colorEnd: state.gradients[i].colorEnd,
              name: state.gradients[i].name,
              tags: state.gradients[i].tags,
              id: state.gradients[i].id
            })
          }
      }
      return {...state, filter: {color: action.payload, gradients: list}}
    default:
      throw new Error(`Unsupported action type ${action.type} in userReducer`)
  }
}