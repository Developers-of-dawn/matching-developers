import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Input } from "antd";
import "./AuthForm.css";
import HomePage from "../../pages/HomePage";
const AuthForm = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeUserid = (e) => {
    setUserid(e.target.value);
  };

  const ErrorMessage = styled.div`
    color:red;
    text-align: center
    font-size:0.875rem;
    margin-top:1rem;
  `;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    alert("로그인 요청을 보냄!");
    setError(null);
    setLoading(true);
    console.log(userid, password);
    axios
      .post("/api/v1/login", {
        userid: userid,
        password: password,
      })
      .then((res) => {
        <HomePage />;
        console.log(res);
      })
      .catch((e) => alert("로그인 실패"));
    setLoading(false);
  };
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}></h3>
      <form onSubmit={onSubmitForm}>
        <br />
        <br />
        <label> 아이디 </label>
        <Input
          type="text"
          name="userid"
          value={userid}
          onChange={onChangeUserid}
        />

        <br />
        <br />
        <label> 비밀번호 </label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
        />

        <button style={{ display: "block", marginTop: "20px" }}>
          {" "}
          로그인{" "}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
