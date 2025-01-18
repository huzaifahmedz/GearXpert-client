import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Marque.css"; // Make sure to import the stylesheet

const Marque = () => {
  const marqueRef = useRef(null);

  useEffect(() => {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 10,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  }, []);

  return (
    <div className="page1">
      {/* You can add content to page1 if needed */}
      <div className="page2 bg-black">
        <div className="move" ref={marqueRef}>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque">
            <h1>Thrive Beyond Limit</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marque;
