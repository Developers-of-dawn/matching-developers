import React, { useState } from "react";
import Editor from "../component/write/Editor";
import Responsive from "../component/common/Responsive";
import WriteActionButtons from "../component/write/WriteActionButtons";
const WritePage = () => {
  const [body, setBody] = useState("");
  console.log(body);
  return (
    <Responsive>
      <Editor body={body} setBody={setBody} />
      <WriteActionButtons body={body} />
    </Responsive>
  );
};

export default WritePage;
