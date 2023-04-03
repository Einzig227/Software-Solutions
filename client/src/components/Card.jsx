import { NavLink } from "react-router-dom";

const Card = ({ title, imgsrc, text, bttnText, path }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={imgsrc} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-truncate">{text}</p>
            <NavLink to={path} className="btn btn-primary">
              {bttnText}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
