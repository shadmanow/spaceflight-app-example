import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import AboutPage from "./pages/about-page";
import NewsPage from "./pages/news-page/news-page";
import NewsListPage from "./pages/news-list-page";
import Header from "./components/header";

import "./app.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/news" />} />
        <Route path="/news" element={<Outlet />}>
          <Route index element={<NewsListPage />} />
          <Route path=":id" element={<NewsPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
