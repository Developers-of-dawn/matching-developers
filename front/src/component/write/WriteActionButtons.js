import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "antd";
const onClickRegister = (e) => {
  axios
    .post("/api/v1/")
    .then((res) => {
      console.log(res);
      alert("등록 완료");
    })
    .catch((e) => alert("등록 실패"));
  //등록하면 서버랑 통신해서 넘긴다.
};
const onClickCancel = (e) => {
  //취소하면 에디터르 다 비우는게 나을지
  alert("취소하시겠습니까?");
  axios
    .post()
    .then((res) => {
      console.log(res);
    })
    .catch((e) => alert("취소 완료"));
  // 등록 취소 버튼
};
const WriteActionButtons = ({ body }) => {
  //등록, 취소 (action , 서버랑 통신 + 게시글 작성 + 게시글 리스트)
  return (
    <div>
       
      <Button onClick={onClickRegister} style={{ display: "inline-block" }}>
        포스트 등록
      </Button>
       
      <Button onClick={onClickCancel} style={{ display: "inline-block" }}>
        취소
      </Button>
    </div>
  );
};

export default WriteActionButtons;
