import { useFilter } from "../context/FilterContext";
import Gradient from "./Gradient"


const GradientsList = () => {
  const { filter, loading } = useFilter();

  return loading ? (
    <p>loading...</p>
  ) : (
    <ul className="row list-unstyled">
      {filter.gradients.map((el) => {
        const { name, colorStart, colorEnd, tags, id = [] } = el;
        return (
          <Gradient
            key={id}
            colorStart={colorStart}
            colorEnd={colorEnd}
            name={name}
            tags={tags}
            id={id}
            index={id - 1}
          />
        );
      })}
    </ul>
  );
};

export default GradientsList;
