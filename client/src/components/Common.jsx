import { NavLink } from "react-router-dom";

const Common = ({ name, imgsrc, visit, btname }) => {
  return (
    <>
      <section
        id="header"
        className="d-flex justify-content-center align-items-top"
      >
        <div className="container-fluid nav_bg overlay">
          <div className="row">
            <div className="col-lg-6">
              <div className="text">
                <h1>
                  {name}
                  <strong className="brand-name"> Software Solutions </strong>
                </h1>
                <h2 className="my-3">
                  We're a team of talented developers
                  <br></br>that can help your business grow!
                </h2>
                <div className="mt-3">
                  <NavLink to={visit} className="btn-get-started">
                    {btname}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={imgsrc} alt="HomeImg" />
      </section>
    </>
  );
}

export default Common;
