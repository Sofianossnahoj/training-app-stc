import ButtonCard from "@/components/card/buttonCard/ButtonCard";
import Hero from "@/components/hero/Hero";
import image from "@/assets/images/our-gym.png";

import useFetch from "@/api/api";

import "./ourGyms.sass";

const OurGyms = () => {
  const { data, loading } = useFetch(
    "https://stc.brpsystems.com/brponline/api/ver3/businessunits"
  );
  const viewHeading = "Our Gyms";

  return (
    <section className="our-gyms-page">
      <Hero heading={viewHeading} image={image} />
      {!loading ? (
        <div className="content-wrapper">
          <ul className="card-list">
            {data.map((gym) => (
              <li className="item" key={gym.id}>
                <ButtonCard data={gym} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="loading">loading...</p>
      )}
    </section>
  );
};

export default OurGyms;
