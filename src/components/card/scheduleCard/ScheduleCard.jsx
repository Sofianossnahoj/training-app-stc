import "./scheduleCard.sass";

const DefaultCard = ({ data }) => {
  const classStart = data.duration.start;
  const startDate = new Date(classStart);
  const startTime = startDate.toISOString().slice(11, 16);

  return (
    <article className="card -light">
      <div className="content-wrapper">
        <p className="paragraph -bold">
          {data.slots.leftToBook} places remaining
        </p>
        <p className="heading">{data.name}</p>
        <div className="paragraph-wrapper">
          <p className="paragraph">{startTime}</p>
          {data.instructors.length == 0 ? null : (
            <p className="paragraph">{data.instructors[0].name}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export default DefaultCard;
