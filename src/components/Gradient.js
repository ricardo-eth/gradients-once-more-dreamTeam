import { Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext";

import GradientTitle from "./GradientTitle";
import GradientPill from "./GradientPill";
import GradientCode from "./GradientCode";
import GradientTags from "./GradientTags";


const Gradient = ({ colorStart, colorEnd, name, tags, id, index }) => {
  const { dispatch } = useFilter();

  const handleFullPageButton = () => {
    dispatch({type: 'FULL_PAGE', payload: index})
  }

  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags tags={tags} />
        <Link onClick={handleFullPageButton} className="btn btn-outline-dark w-100" to={`/gradient/${id}`}>
          Plein écran
        </Link>
      </div>
    </li>
  );
};

export default Gradient;
