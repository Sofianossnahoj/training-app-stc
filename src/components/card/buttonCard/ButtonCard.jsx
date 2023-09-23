import "./buttonCard.sass";
import Button from "@/components/shared/linkButton/LinkButton";
import arrowIcon from "@/assets/icons/arrow-right.svg";

const ButtonCard = ({ data }) => {
  return (
    <article className="card -dark">
      <div className="content-wrapper">
        <h3 className="heading">{data.name}</h3>
      </div>
      <div className="button-wrapper">
        <Button data={data} icon={arrowIcon} />
      </div>
    </article>
  );
};

export default ButtonCard;
