import { useFilter } from "../context/FilterContext";
import Gradient from "./Gradient";

const GradientsList = () => {
  
  const { gradients, loading } = useFilter()

  return loading ? (
    <p>loading...</p>
  ) : (
    <ul className="row list-unstyled">
      {gradients.map((el) => {
        const { name, colorStart, colorEnd, tags, id = [] } = el
        return (
          <Gradient
            key={name}
            colorStart={colorStart}
            colorEnd={colorEnd}
            name={name}
            tags={tags}
            id={id}
          />
        );
      })}
    </ul>
  );
};

export default GradientsList;
