import { useFilter } from "../context/FilterContext"
import  Gradient  from "./Gradient"

const GradientsList = () => {
  
  const { gradients, filter, loading } = useFilter()
  
  const list = gradients.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })

  return (
    loading ? (
        <p>loading...</p>
      ) : (
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { name, start, end, tags = [] } = el
        return (
          <Gradient
            key={name}
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
          />
        )
      })}
    </ul>
  )

)}

export default GradientsList
