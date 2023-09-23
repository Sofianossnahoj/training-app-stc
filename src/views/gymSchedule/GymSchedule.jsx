import { useLocation } from "react-router-dom";

import DefaultCard from "@/components/card/defaultCard/DefaultCard";
import Hero from "@/components/hero/Hero";
import image from "@/assets/images/schedule.png";
import "./gymSchedule.sass";

import { DateFormat } from "@/helpers/DateFormat.jsx";
import useFetch from "@/api/api";

const GymSchedule = () => {
  const location = useLocation();
  const { todayTimestamp, sevenDaysLaterTimestamp } = DateFormat();
  const groupedDataByDay = {};
  const { data } = useFetch(
    `https://stc.brpsystems.com/brponline/api/ver3/businessunits/${location.state.id}/groupactivities?period.start=${todayTimestamp}&period.end=${sevenDaysLaterTimestamp}`
  );

  data.forEach((item) => {
    const durationStart = new Date(item.duration.start);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    let dayOfWeek = durationStart.toLocaleDateString("en-US", {
      weekday: "long",
    });
    if (durationStart.toDateString() === today.toDateString()) {
      dayOfWeek = "Today";
    } else if (durationStart.toDateString() === tomorrow.toDateString()) {
      dayOfWeek = "Tomorrow";
    }
    if (!groupedDataByDay[dayOfWeek]) {
      groupedDataByDay[dayOfWeek] = [];
    }
    groupedDataByDay[dayOfWeek].push(item);
  });

  return (
    <main className="schedule-page">
      <Hero
        heading={location.state.name}
        preamble={location.state.address.street}
        image={image}
        city={location.state.address.city}
        postalCode={location.state.address.postalCode}
      />
      <section className="content-wrapper">
        {Object.keys(groupedDataByDay).length === 0 ? (
          <p className="preamble -low-opacity">No upcoming sessions</p>
        ) : (
          <p className="preamble -low-opacity">Upcoming sessions</p>
        )}
        {Object.entries(groupedDataByDay).map(([dayOfWeek, items]) => (
          <article className="card-list-wrapper" key={dayOfWeek}>
            <h2 className="heading">{dayOfWeek}</h2>
            <ul className="card-list">
              {items.map((item) => (
                <li className="item" key={item.id}>
                  <DefaultCard data={item} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
};

export default GymSchedule;
