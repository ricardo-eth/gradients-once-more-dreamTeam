import Footer from "../components/Footer";
import { useFilter } from "../context/FilterContext";

export const FullPage = () => {
  const { gradients } = useFilter();

  let pageURL = window.location.href;
  let lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1);
  console.log(lastURLSegment);

  console.log(gradients[lastURLSegment - 1]);

  const gradientsURL = gradients[lastURLSegment - 1];

  const style = {
    backgroundImage: `linear-gradient(to right, ${gradientsURL.colorStart}, ${gradientsURL.colorEnd})`,
  };

  return (
    <>
      <div class="min-vh-100 d-flex flex-column">
        <div className="flex-fill d-flex" style={style}>
          <nav className="fixed-top nav">
            <li className="nav-item">
              <a className="btn btn-dark text-white nav-link me-2" href="/">
                Tous
              </a>
            </li>
            <li className="nav-item">
              <a
                class="btn btn-dark text-white nav-link me-2"
                href="/gradient/6"
              >
                Précédent
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-dark text-white nav-link"
                href="/gradient/8"
              >
                Suivant
              </a>
            </li>
          </nav>
          <div className="m-auto text-center">
            <h1 className="text-white display-1">{gradientsURL.name}</h1>
            <div className="bg-white shadow p-2 rounded">
              <code>
                background-image: linear-gradient(to right,
                {gradientsURL.colorStart},{gradientsURL.colorEnd})
              </code>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
