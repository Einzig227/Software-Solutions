import { useState, useEffect } from "react";
import Card from "../components/Card";

const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch("/api/news");
      const news = await res.json();
      setData(news);
    };
    fetchNews();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center">News</h1>
      </div>
      <div className="container-fluid my-5">
        <div className="row row-cols-lg-3 row-cols-2">
          {data?.map((piece) => (
            <Card
              key={piece._id}
              title={piece.title}
              imgsrc={piece.imgURL}
              text={piece.text}
              bttnText="Read more"
              path={`/news/${piece._id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
