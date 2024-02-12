import { Link } from "react-router-dom";
import ButtonPuc from "../ButtonPuc";
import puc from "../../assets/images/puc.jpeg";
import heart from "../../assets/images/heart.png";
import "../../App.scss";

const MainPage = () => {
  return (
    <div className="App">
      <img className="heart" src={heart} alt="heart" />
      <img className="catty" src={puc} alt="puc" />
      <Link to={"/love-page"}>
        <ButtonPuc text="пук-пук =ˆ-ˆ=" />
      </Link>
    </div>
  );
};

export default MainPage;
