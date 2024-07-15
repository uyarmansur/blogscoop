import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Trending from "../../components/Trending/Trending";
import MainPageBlogs from "../../components/MainPageBlogs/MainPageBlogs";
function MainPage() {
  return (
    <div>
      <Navbar />
      <Trending />
      <MainPageBlogs />
    </div>
  );
}

export default MainPage;
