import {useFilter} from "../context/FilterContext"

const GradientTagButton = ({ tag }) => {
  const {filter, dispatch, gradients} = useFilter()
  const className = filter.color === tag ? "bg-light" : "bg-dark text-white"
  return (
    <button
      type="button"
      className={`btn btn-sm me-2 mb-2 ${className}`}
      disabled={filter.color === gradients.tag}
      value={tag}
      onClick={(e) => dispatch({type: "FILTER_CHANGE", payload: e.target.value })}
    >
      {tag}
    </button>
  )
}

export default GradientTagButton
