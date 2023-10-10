import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ name, id, picture, description, }) => {
  return (
    <NavLink to={`/detail/${id}`} className={style.navlink}>
      <div className={style.container}>
        <div className={style.card}>
          <div>
            <img src={picture} alt="image" />
          </div>
          <div className={style.info}>
            <div className={style.text}>
              <h3>{name}</h3>
            </div>
            <div className={style.description}>
              <h4>Description</h4>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
