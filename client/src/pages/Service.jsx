import Card from "../components/Card";
import img1 from "../Pictures/img1.png";
import img2 from "../Pictures/img2.png";
import img3 from "../Pictures/img3.png";
import img4 from "../Pictures/img4.png";
import img5 from "../Pictures/img5.png";
import img6 from "../Pictures/img6.png";

const Service = () => {
  return (
    <>
      <div>
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row row-cols-3 gy-4">
              <Card
                title="Android Development"
                imgsrc={img1}
                bttnText="Add"
                path="/contact"
              />
              <Card
                title="Web Development"
                imgsrc={img2}
                bttnText="Add"
                path="/contact"
              />
              <Card
                title="Database Management"
                imgsrc={img3}
                bttnText="Add"
                path="/contact"
              />
              <Card
                title="Business Analytics"
                imgsrc={img4}
                bttnText="Add"
                path="/contact"
              />
              <Card
                title="Digital Marketing"
                imgsrc={img5}
                bttnText="Add"
                path="/contact"
              />
              <Card
                title="Video Creation"
                imgsrc={img6}
                bttnText="Add"
                path="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
