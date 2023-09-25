import arrowIcon from "@/assets/icons/arrow-right.svg";
import Button from "@/components/shared/linkButton/LinkButton";

import "./buttonCard.sass";

const ButtonCard = ({ data }) => {
  return (
    <article className="card -dark">
      <div className="content-wrapper">
        <h2 className="heading">{data.name}</h2>
      </div>
      <div className="button-wrapper">
        <Button data={data} icon={arrowIcon} />
      </div>
    </article>
  );
};

export default ButtonCard;
