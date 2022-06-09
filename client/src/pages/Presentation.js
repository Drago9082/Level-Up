import react, { useEffect } from "react";
import Reveal from "reveal.js";

import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

function Presentation() {
  useEffect(() => {
    let deck = new Reveal({
      backgroundTransition: "slide",
      transition: "slide",
    });
    deck.initialize();
    console.log("initialized fool");
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        <section data-background="./images/ha.png"></section>
        <section>
          <h1 className="fragment fade-in">Level Up</h1>
          <p className="fragment fade-in">
            <small>
              Developed by{" "}
              <a href="https://github.com/jkstone321">Jordan Stone</a>,{" "}
              <a href="https://github.com/Drago9082">Rajiv Tiwari</a>,{" "}
              <a href="https://github.com/odisclemons">Odis Clemons</a>, and{" "}
              <a href="https://github.com/Droessling94">Donaldson Roessling</a>
            </small>
          </p>
        </section>
        <section>
          <section>
            <h1>Elevator Pitch</h1>
          </section>
          <section></section>
        </section>
        <section>
          <section>
            <h1>Concept</h1>
          </section>
          <section>a;lkdjf;lk</section>
        </section>
        <section>
          <section>
            <h1>Technologies Used</h1>
          </section>
          <section>ahsdf</section>
        </section>
      </div>
    </div>
  );
}

export default Presentation;
