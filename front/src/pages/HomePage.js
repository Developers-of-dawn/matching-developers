import React from "react";
import { Link } from "react-router-dom";
import PostListPage from "./PostListPage";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="loginregister">
        <Link to="/login"> 로그인 </Link>
        <Link to="/register"> 회원가입 </Link>
      </div>
      <PostListPage />
    </div>
  );
};

export default HomePage;
