import Card from "@/components/card/buttonCard/ButtonCard";
import Hero from "@/components/hero/Hero";
import image from "@/assets/images/our-gym.png";
import "./ourGyms.sass";

import useFetch from "@/api/api";

const OurGyms = () => {
  const { data, loading } = useFetch(
    "https://stc.brpsystems.com/brponline/api/ver3/businessunits"
  );
  const viewHeading = "Our Gyms";

  return (
    <main className="our-gyms-page">
      <Hero heading={viewHeading} image={image} />
      {!loading ? (
        <section className="content-wrapper">
          <ul className="card-list">
            {data.map((gym) => (
              <li className="item" key={gym.id}>
                <Card data={gym} />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p className="loading">loading...</p>
      )}
    </main>
  );
};

export default OurGyms;
