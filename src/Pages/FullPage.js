import Footer from "../components/Footer";
import { useState } from "react";
import { useFilter } from "../context/FilterContext";

export const FullPage = () => {
  const { gradients } = useFilter();
  const length = gradients.length;

  const chooseGradient = () => Math.floor(Math.random() * length);

  const [randomGradient, setRandomGradient] = useState(chooseGradient);
  const handleNextClick = () => {
    setRandomGradient(randomGradient === length - 1 ? 0 : randomGradient + 1);
  };
  const handlePrevClick = () => {
    setRandomGradient(randomGradient === 0 ? length - 1 : randomGradient - 1);
  };

  const style = {
    backgroundImage: `linear-gradient(to right, ${gradients[randomGradient].colorStart}, ${gradients[randomGradient].colorEnd})`,
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
          </nav>{" "}
          <div className="m-auto text-center">
            <h1 className="text-white display-1">{gradients.name}</h1>
            <div className="bg-white shadow p-2 rounded">
              <code>
                background-image: linear-gradient(to right, rgb(253, 200, 48),
                rgb(243, 115, 53));
              </code>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
