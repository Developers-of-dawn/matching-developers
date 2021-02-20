import React, { useRef, useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
const Editor = ({ body, setBody }) => {
  // const [body, setBody] = useState("");

  const handleChange = (e) => {
    setBody(e);
    // console.log(body);
  };

  return (
    <>
      <ReactQuill value={body} onChange={handleChange} />
    </>
  );
};
export default Editor;
