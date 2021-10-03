import standoutMobile from "../images/mobile/image-stand-out.jpg";
import standoutDesktop from "../images/desktop/image-stand-out.jpg";

const StandOut = () => {
  return (
    <>
      <section className="lg:flex items-center 2xl:max-w-7xl 2xl:mx-auto">
        <div>
          <picture>
            <source media="(min-width: 768px)" srcSet={standoutDesktop} />
            <img src={standoutMobile} alt="" className="w-full" />
          </picture>
        </div>

        <div className="p-5 text-center lg:text-left lg:w-1/2 lg:p-20">
          <h2 className="my-10">Stand out to the right audience</h2>
          <p className="mb-5">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="btns btn-standout">Learn More</button>
        </div>
      </section>
    </>
  );
};

export default StandOut;
