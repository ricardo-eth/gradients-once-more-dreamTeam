import { useFilter } from "../context/FilterContext"


function allTags(list) {

  /* retourner la liste des tags uniques */
  let listTotal = [];
  for (let element of list) {
    if ("tags" in element) {
      listTotal = listTotal.concat(element.tags);
    }
  }
  const listTagsUnique = [];
  listTotal.forEach((el) => {
    if (!listTagsUnique.includes(el)) {
      //listTagsUnique = listTagsUnique.concat([el])
      listTagsUnique.push(el);
    }
  });

  return listTagsUnique;
}



const GradientsSelect = () => {
  const { dispatch, filter, gradients } = useFilter()

  const uniqueTags = allTags(gradients);

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
        {uniqueTags.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect
