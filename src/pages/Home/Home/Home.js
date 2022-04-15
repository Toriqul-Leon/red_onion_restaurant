import React from "react";
import "./Home.css";
import banner from "../../../images/bannerbackground.png";

const Home = () => {
  return (
    <div className="container">
      <form className="search-bar">
        <input type="text" name="" id="" placeholder="Search Food Item" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Home;
