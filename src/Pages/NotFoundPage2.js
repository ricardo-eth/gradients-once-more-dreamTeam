import { Link } from "react-router-dom"
import "../notFound.css"

export const NotFoundPage2 = () => {
  
  return (
    <div className="main min-vh-100">
     <div className="mainbox">
    <div className="err">4</div>
    <i className="far fa-question-circle fa-spin"></i>
    <div className="err2">4</div>
    <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link className="btn btn-dark text-white me-2" to={`/`}>
              Home
            </Link> and try from there.</p></div>
      </div>
    </div>
  );
};
