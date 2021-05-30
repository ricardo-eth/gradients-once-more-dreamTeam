import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext";


export const FullPage = () => {
  const { gradients, index, dispatch} = useFilter();

  // let pageURL = window.location.href;
  // let lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1);
  // console.log(lastURLSegment);

  // console.log(gradients[lastURLSegment - 1]);

  // const gradientsURL = gradients[lastURLSegment - 1];

  const style = {
    backgroundImage: `linear-gradient(to right, ${gradients[index].colorStart}, ${gradients[index].colorEnd})`,
  };

  const handleAllButton = () => {
    dispatch({type: 'FILTER_CHANGE', payload: "all"})
  }

  const handlePrevButton = () => {
    dispatch({type: 'FULL_PAGE', payload: 'prev'})
  }

  const handleNextButton = () => {
    dispatch({type: 'FULL_PAGE', payload: 'next'})
  }

  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <div className="flex-fill d-flex" style={style}>
          <nav className="fixed-top nav">
            <li className="nav-item">
              <Link onClick={handleAllButton} className="btn btn-dark text-white nav-link me-2" to={`/`}>
               Tous
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handlePrevButton} className="btn btn-dark text-white nav-link me-2" to={`/gradient/${gradients[index === 0 ? gradients.length - 1 : index - 1].id}`}>
               Précédent
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleNextButton} className="btn btn-dark text-white nav-link me-2" to={`/gradient/${gradients[index === 24 ? 0 : index + 1].id}`}>
               suivant
              </Link>
            </li>
          </nav>
          <div className="m-auto text-center">
            <h1 className="text-white display-1">{gradients[index].name}</h1>
            <div className="bg-white shadow p-2 rounded">
              <code>
                background-image: linear-gradient(to right,
                {gradients[index].colorStart},{gradients[index].colorEnd})
              </code>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
