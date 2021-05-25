import { useFilter } from "../context/FilterContext"

const GradientsSelect = () => {
  const { dispatch, filter, gradients } = useFilter()

  const handleSelectChange = (e) => {
    dispatch({ type: "FILTER_CHANGE", payload: e.target.value})
  }
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="all">Tous</option>
        {tags.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect
