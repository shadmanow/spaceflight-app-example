import { Link } from "react-router-dom";
import NewsItem from "../news-item";

import "./news-list.scss";

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item) => (
        <Link key={item.id} to={`/news/${item.id}`}>
          <NewsItem item={item} />
        </Link>
      ))}
    </div>
  );
};

export default NewsList;
