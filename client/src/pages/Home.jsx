import Common from "../components/Common";
import web from "../Pictures/img2.png";
import Contact from "./Contact";
import News from "./News";
import Service from "./Service";

import ReactFullpage from "@fullpage/react-fullpage";

const Home = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    scrollBar={true}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <>
              <Common
                name="Grow your business with"
                imgsrc={web}
                visit="/service"
                btname="Get started"
              />
            </>
          </div>

          <div className="section">
            <News />
          </div>

          <div className="section">
            <Service />
          </div>
          <div className="section">
            <Contact />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;
