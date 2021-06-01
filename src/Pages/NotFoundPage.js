import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../notFound.css"

export const NotFoundPage = () => {
  const style = {
    backgroundImage: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)`,
  };
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <div className="flex-fill d-flex" style={style}>
          <div className="m-auto text-center">
            <h1 className="text-white display-1">Error 4<i className="far fa-question-circle fa-spin"></i>04</h1>
            <h3 className="text-white">page not found</h3>
            <Link className="btn btn-dark text-white me-2" to={`/`}>
              Retour
            </Link>
          </div>
        </div>
        <Footer />
      </div>
      
    </>
  );
};
