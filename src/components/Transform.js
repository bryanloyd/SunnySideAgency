import transformMobile from "../images/mobile/image-transform.jpg";
import transformDesktop from "../images/desktop/image-transform.jpg";

const Transform = () => {
  return (
    <>
      <section className="lg:flex flex-row-reverse items-center">
        <div>
          <picture>
            <source media="(min-width: 768px)" srcSet={transformDesktop} />
            <img src={transformMobile} alt="" className="w-full" />
          </picture>
        </div>

        <div className="p-5 text-center lg:text-left lg:w-1/2 lg:p-0">
          <h2 className="my-10">Transform your brand</h2>
          <p className="mb-5 p-7">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="btns btn-transform">Learn More</button>
        </div>
      </section>
    </>
  );
};

export default Transform;
