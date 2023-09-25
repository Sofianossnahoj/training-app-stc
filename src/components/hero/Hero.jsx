import "./hero.sass";

const Hero = ({ heading, preamble, city, postalCode, image }) => {
  return (
    <section className="page-hero">
      <div className="image-wrapper">
        <img className="image" src={image} alt="ingen bild" />
      </div>
      <div className="content-wrapper">
        {heading && <h1 className="heading">{heading}</h1>}
        {preamble && <p className="preamble">{preamble}</p>}
        <div className="address-wrapper">
          {postalCode && <p className="preamble">{postalCode}</p>}
          {city && <p className="preamble">{city}</p>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
