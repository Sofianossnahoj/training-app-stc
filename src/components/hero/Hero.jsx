import "./hero.sass";
import Navigation from "@/components/shared/navigation/Navigation";

const Header = ({ heading, preamble, city, postalCode, image }) => {
  return (
    <header className="page-hero">
      <Navigation />
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
    </header>
  );
};

export default Header;
