import React, { useState } from "react";
import axios from "axios";
import { Input, Checkbox } from "antd";
import styled from "styled-components";
import "./AuthForm.css";
const AuthFormRegister = () => {
  const Jobs = [
    { key: 1, value: "student" },
    { key: 2, value: "office worker" },
    { key: 3, value: "job seeker" },
  ];
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [job, setJob] = useState({ key: 1, value: "student" });
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const onChangeUserid = (e) => {
    setUserid(e.target.value);
  };

  const onChangeJob = (e) => {
    setJob(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
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
    if (password !== passwordCheck) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    if ([userid, password, passwordCheck, nickname, phone, job].includes("")) {
      setError("빈칸을 모두 입력하세요.");
      return;
    }
    console.log("onSubmit");
    alert("회원가입 요청을 보냄!");
    setError(null);
    setLoading(true);
    axios
      .post("/api/v1/join", userid, password, nickname, phone, job)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => alert("회원가입 실패"));
    setLoading(false);
  };
  return (
    <div>
      <form onSubmit={onSubmitForm} noValidate style={{ textAlign: "center" }}>
        <label>아이디</label>
        <Input
          type="text"
          name="userid"
          value={userid}
          onChange={onChangeUserid}
        />
        <br />
        <br />

        <label>비밀번호</label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
        />
        <br />
        <br />

        <label>비밀번호 확인</label>
        <Input
          type="password"
          name="passwordCheck"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
        <br />
        <br />

        <label> 닉네임 </label>
        <Input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChangeNickname}
        />
        <br />
        <br />

        <label>전화번호</label>
        <Input type="number" name="phone" onChange={onChangePhone} />
        <br />
        <br />

        <label>직업</label>
        <select onChange={onChangeJob}>
          {Jobs.map((item) => {
            return (
              <option key={item.key} value={item.value}>
                {item.value}
              </option>
            );
            console.log(item.key);
            console.log(item.value);
          })}
        </select>
        <br />
        <br />

        <label>기술스택(중복 선택 가능)</label>

        <Checkbox.Group
          id="Checkbox"
          options={[
            { label: "서버/DB", value: "server" },
            { label: "프론트엔드", value: "frontend" },
            { label: "풀스택", value: "fullstack" },
            { label: "안드로이드", value: "android" },
            { label: "IOS", value: "ios" },
            { label: "머신러닝", value: "machineLearning" },
            { label: "AI", value: "ai" },
            { label: "사물인터넷(IoT)", value: "iot" },
            { label: "게임 클라이언트", value: "gameClient" },
            { label: "게임 서버", value: "gameServer" },
          ]}
        ></Checkbox.Group>
        {error && <ErrorMessage> {error} </ErrorMessage>}
        <button style={{ display: "block", marginTop: "20px" }}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default AuthFormRegister;
