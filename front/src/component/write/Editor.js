import React, { useRef, useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "./Editor.css";
const Editor = ({ title, body, setTitle, setBody }) => {
  // const [body, setBody] = useState("");
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={onChangeTitle}
          placeholder="제목을 입력해주세요."
        />
        <textarea
          type="text"
          name="body"
          onChange={onChangeBody}
          placeholder="내용을 입력해주세요."
        ></textarea>
      </form>
    </>
  );
};
export default Editor;
