import { useFilter } from "../context/FilterContext";
import Gradient from "./Gradient";

const GradientsList = () => {
  const { gradients, loading } = useFilter();
  console.log(gradients);
  console.log("gradient");

  return loading ? (
    <p>loading...</p>
  ) : (
    <ul className="row list-unstyled">
      {gradients.map((el) => {
        const { name, start, end, tags, id = [] } = el;
        console.log(start);
        console.log(end);
        console.log("colors");
        return (
          <Gradient
            key={id}
            colorStart={start}
            colorEnd={end}
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
