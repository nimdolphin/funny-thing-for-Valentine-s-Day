import lovecats from "./lovecats.jpeg";
import "./App.scss";
import ButtonPuc from "./ButtonPuc";
import { Link } from "react-router-dom";

const LovePage = () => {
  return (
    <div className="App">
      <img className="catty" src={lovecats} alt="lovecats" />
      <h1 className="loveyou">ЛУБЛУК!!</h1>
      <Link to={"/and-you"}>
        <ButtonPuc text="пердук :3" />
      </Link>
    </div>
  );
};

export default LovePage;
