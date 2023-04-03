import Card from "../components/Card";
import logo from "../../public/images/software-solutions.png";

const Research = () => {
  return (
    <>
      <div>
        <h1 className="text-center">Research</h1>
      </div>
      <div className="container-fluid my-5">
        <div className="row gy-4 ">
          <Card title="Research" imgsrc={logo} />
          <Card title="Research" imgsrc={logo} />
          <Card title="Research" imgsrc={logo} />
          <Card title="Research" imgsrc={logo} />
        </div>
      </div>
    </>
  );
}

export default Research;
