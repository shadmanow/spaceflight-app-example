import { useState } from "react";

import Loader from "../loader";
import "./news-item.scss";

const NewsItem = ({ item }) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => setLoaded(true);
  return (
    <div className="news-item">
      <div className="news-item__image">
        <Loader className={loaded && "img-loaded"} />
        <img src={item.imageUrl} onLoad={handleLoad} alt="news" />
      </div>
      <div className="news-item__title">
        <span>{item.title}</span>
      </div>
      <div className="news-item__summary">
        <p>{item.summary}</p>
      </div>
      <div className="news-item__date">
        <span>{new Date(item.publishedAt).toUTCString()}</span>
      </div>
    </div>
  );
};

export default NewsItem;
