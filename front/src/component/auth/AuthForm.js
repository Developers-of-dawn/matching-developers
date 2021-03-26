import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./AuthForm.css";
import HomePage from "../../pages/HomePage";

const AuthForm = () => {
  const onClickButton = (e) => {
    axios
      .get(
        "https://github.com/login/oauth/authorize?client_id=1c5988c24cb3ace6582f&redirect_uri=http://localhost:3000/"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}></h3>
      <button onClick={onClickButton}>깃허브로 로그인하기</button>
    </div>
  );
};

export default AuthForm;
