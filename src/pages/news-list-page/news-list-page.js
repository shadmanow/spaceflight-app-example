import { useEffect, useState } from "react";

import NewsList from "../../components/news-list/news-list";
import useApi from "../../hooks/useApi";

import "./news-list-page.scss";

const NewsListPage = () => {
  const [fetchData, loading] = useApi();
  const [searchValue, setSearchValue] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData({
      extraUrl: "/articles",
      _limit: 40,
    }).then((news) => setNews(news));
  }, []);

  const handleChange = (event) => setSearchValue(event.target.value);

  const handleClick = () => {
    if (searchValue.length) {
      fetchData({
        extraUrl: "/articles",
        _limit: 20,
        title_contains: searchValue,
      }).then((news) => setNews(news));
    }
  };

  return (
    <div className="news-list-page">
      <div className="news-list-page__upper">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </div>
      {!loading && <NewsList news={news} />}
    </div>
  );
};

export default NewsListPage;
