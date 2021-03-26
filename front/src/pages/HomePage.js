import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import axios from "axios";
const HomePage = () => {
  const onClickLogin = (e) => {
    axios
      .get(
        "https://github.com/login/oauth/authorize?client_id=1c5988c24cb3ace6582f"
      )
      .then((code) => {
        console.log(code);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="aside">
        <div className="login">
          <a href="/" className="logo">
            <div className="handshake">🤝</div>{" "}
          </a>
          <div className="mdDiv"> Matching Developers</div>
          <button onClick={onClickLogin}>깃허브로그인 하기</button>
          <a
            href="https://github.com/login/oauth/authorize?scope=user:email&client_id=1c5988c24cb3ace6582f"
            className="buttonLogin"
          >
            깃허브로 로그인하기
          </a>
        </div>
      </div>
      <div className="leftDiv">페이지 간단히 설명</div>
    </div>
  );
};

export default HomePage;
