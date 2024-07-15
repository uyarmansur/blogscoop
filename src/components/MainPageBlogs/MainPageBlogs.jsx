import React from "react";
import "./MainPageBlog.scss"
import CardBlog from "./components/CardBlog/CardBlog";
import DiscoverTopics from "./components/DiscoverTopics/DiscoverTopics";
function MainPageBlogs() {
  return (
    <div
      className="mainPageBlogs"
    >
      <CardBlog />
      <DiscoverTopics />
    </div>
  );
}

export default MainPageBlogs;
