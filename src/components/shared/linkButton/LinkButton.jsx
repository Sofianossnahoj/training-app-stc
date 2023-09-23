import { useNavigate } from "react-router-dom";

const LinkButton = ({ data, icon }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/${data.name}`, { state: data });
  };
  return (
    <a className="button" onClick={navigateTo}>
      <img src={icon} alt="Arrow icon" />
    </a>
  );
};

export default LinkButton;
