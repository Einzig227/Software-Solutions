import Common from "../components/Common";
import web from "../Pictures/img3.png";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to the world of"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;
