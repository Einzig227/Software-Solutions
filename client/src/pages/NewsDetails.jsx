import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPiece = async () => {
      const res = await fetch(`/api/news/${id}`);
      const piece = await res.json();
      setData(piece);
      console.log(piece);
    };
    fetchPiece();
  }, [id]);

  return (
    <div
      className="container-fluid my-3 mx-5 px-7"
      style={{ justifyContent: "center" }}
    >
      <div className=" justify-content-center row-cols-1 gy-3">
        <div>
          <h1>
            <strong>{data?.title}</strong>
          </h1>
        </div>
        <div>
          <img width="60%" src={data?.imgURL} alt={data?.title} />
        </div>
        <div style={{ width: "60%" }}>
          <h5 className="text-wrap">{data?.text}</h5>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
