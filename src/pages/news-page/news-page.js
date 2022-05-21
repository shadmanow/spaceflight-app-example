import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/loader";
import NewsItem from "../../components/news-item";
import useApi from "../../hooks/useApi";

import "./news-page.scss";

const NewsPage = () => {
  const { id } = useParams();
  const [fetchData, loading] = useApi();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetchData({
      extraUrl: "/articles",
      id,
    }).then((news) => setNews(news[0]));
  }, []);

  return (
    <div className="news-page">
      {loading && <Loader />}
      {news && <NewsItem item={news} />}
      {news && (
        <a className="news-page__link" href={news.url} target="_blank" rel="noreferrer">
          Source Link
        </a>
      )}
    </div>
  );
};

export default NewsPage;
