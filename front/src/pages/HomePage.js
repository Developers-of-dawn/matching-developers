import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="aside">
        <div className="login">
          <a href="/" className="logo">
            <div className="handshake">🤝</div>{" "}
          </a>
          <div className="mdDiv"> Matching Developers</div>
          <a
            href="https://github.com/login/oauth/authorize?client_id=1c5988c24cb3ace6582f&redirect_uri=http://localhost:3000/"
            className="buttonLogin"
          >
            깃허브로 로그인하기
          </a>
        </div>
        <Link to="/login"> 로그인 </Link>
        <Link to="/register"> 회원가입 </Link>
      </div>
      <div className="leftDiv">페이지 간단히 설명</div>
    </div>
  );
};

export default HomePage;
