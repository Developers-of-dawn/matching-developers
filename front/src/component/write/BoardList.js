import React from "react";
import "./BoardList.css";
const BoardList = () => {
  //더미데이터
  const datas = [
    {
      key: 0,
      username: "hyevvy",
      title: "리액트 프로젝트 같이 하실 분..",
      isRecruited: true,
    },
    {
      key: 1,
      username: "혜경이",
      title: "안드로이드 앱만들기",
      isRecruited: false,
    },
  ];
  //[{username:'hyevvy', title:'리액트 프로젝트 같이 하실 분 구해요', isRecruited:'true'}], [], []
  //[작성자, 제목, 내용, 주제분류(서버, 프론트등등), 작성시간, 구인완료여부]
  console.log(datas[1]); //여기서는 잘 나오는데 table에서 하면 오류남.. ㅜㅜ
  console.log(datas.length);
  return (
    <div>
      <div className="mdDiv">🤝 Matching Developers</div>
      <table>
        <thead className="mdListDiv">현재 모집중인 프로젝트</thead>
        <tr>
          <td>게시글 이름</td>
          <td>작성자</td>
          <td>모집여부</td>
        </tr>
        {datas.map((i, key) => {
          console.log(i);
          return (
            <tr key={key}>
              <td>{i.title}</td>
              <td>{i.username}</td>
              <td> {i.isRecruited ? "모집중" : "모집 완료"} </td>
            </tr>
          );
        })}
        <tfoot>나중에 인덱스 추가</tfoot>
      </table>
    </div>
  );
};

export default BoardList;
