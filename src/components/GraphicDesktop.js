import { useState } from "react";
import { graphicDesktop } from "../data/graphic";

const GraphicDesktop = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(graphicDesktop);

  return (
    <>
      <section className="graphic md:flex items-center justify-center">
        {cards.map(({ id, image, title, text }) => (
          <article key={id} className="relative">
            <img src={image} alt={title} />
            <div className="absolute bottom-5 left-0 text-center">
              <h3 className="mb-5">{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default GraphicDesktop;
