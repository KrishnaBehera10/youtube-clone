import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sport from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import camera from "../../assets/cameron.png";
import { Auth } from "../../UseContext/AuthContext";
import { useContext } from "react";
function Sidebar() {
  const { Sidebar, category, setCategory } = useContext(Auth);
  return (
    <div className={`sidebar ${Sidebar ? "Hide" : ""} `}>
      <div className="sortcut-link">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={sport} alt="" />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <hr />
      </div>
      <div className="subscript-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>Aryan Singh</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>Simon</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Tom Doe</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={camera} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
