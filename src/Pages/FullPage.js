import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { useFilter } from "../context/FilterContext";

export const FullPage = () => {
  const params = useParams();
  const { id } = params;
  console.log(params);
  const { gradients, dispatch } = useFilter();

  const handleAllButton = () => {
    dispatch({ type: "FILTER_CHANGE", payload: "all" });
  };

  const style = {
    backgroundImage: `linear-gradient(to right, ${
      gradients[id - 1]?.colorStart
    }, ${gradients[id - 1]?.colorEnd})`,
  };

  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <div className="flex-fill d-flex" style={style}>
          <nav className="fixed-top nav p-3">
            <li className="nav-item">
              <Link
                onClick={handleAllButton}
                className="btn btn-dark text-white nav-link me-2"
                to={`/`}
              >
                Tous
              </Link>
            </li>
            <li className="nav-item">
              {id > 1 ? (
                <Link
                  className="btn btn-dark text-white nav-link me-2"
                  to={`/gradient/${gradients[id - 2]?.id}`}
                >
                  Precedent
                </Link>
              ) : (
                ""
              )}
            </li>
            <li className="nav-item">
              {id < 25 ? (
                <Link
                  className="btn btn-dark text-white nav-link me-2"
                  to={`/gradient/${gradients[id]?.id}`}
                >
                  suivant
                </Link>
              ) : (
                ""
              )}
            </li>
          </nav>
          <div className="m-auto text-center">
            <h1 className="text-white display-1 text-anim">
              {gradients[id - 1]?.name}
            </h1>
            <div className="bg-white shadow p-2 rounded">
              <code>
                background-image: linear-gradient(to right,
                {gradients[id - 1]?.colorStart},{gradients[id - 1]?.colorEnd})
              </code>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
