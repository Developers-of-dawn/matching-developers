// import React, { useState, useCallback } from 'react';
// import styled from 'styled-components';
// import { Checkbox, Radio } from 'antd';
// import 'antd/dist/antd.css';
// import { Link } from 'react-router-dom';
// import palette from '../../lib/styles/palette';
// import Button from '../common/Button';
// import '../auth/AuthFormRegister.css';

// //회원가입과 로그인 폼
// const AuthFormBlock = styled.div`
//   h3 {
//     margin: 0;
//     color: ${palette.gray[8]};
//     margin-bottom: 1rem;
//   }
// `;
// const StyledInput = styled.input`
//   display:block;
//   font-size:1rem;
//   border:none;
//   border-bottom:1px solid ${palette.gray[5]};
//   padding-bottom:0.5rem;
//   outline:none;
//   width:100%,
//   &:focus{
//     color: $oc-teal-7;
//     border-bottom:1px solid ${palette.gray[7]};
//   }
//   & + & {
//     margin-top:1rem;

//   }
// `;

// const Footer = styled.div`
//   margin-top: 2rem;
//   text-align: right;
//   a {
//     color: ${palette.gray[6]};
//     text-decoration: underline;
//     &:hover {
//       color: ${palette.gray[9]};
//     }
//   }
// `;
// const addressOptions = [
//   { label: '서울시', value: 'Seoul' },
//   { label: '경기도', value: 'Gyeonggi' },
//   { label: '강원도', value: 'Gangwon' },
//   { label: '충청도', value: 'Chungcheong' },
//   { label: '경상도', value: 'Gyeongsang' },
//   { label: '전라도', value: 'Jeolla' },
//   { label: '제주도', value: 'Jeju' },
// ];
// const AuthFormRegister = () => {
//   const [address, setAddress] = useState('');
//   const onChangeAddress = useCallback((e) => {
//     setAddress(e.target.value);
//   }, []);
//   return (
//     <AuthFormBlock>
//       <h3>회원가입</h3>
//       <form>
//         <div className="myLabel">아이디</div>
//         <StyledInput
//           autonComplete="username"
//           name="username"
//           placeholder="아이디"
//           onChange={onChange}
//           value={form.username}
//         />
//         <div className="myLabel">비밀번호</div>
//         <StyledInput
//           autoComplete="new-password"
//           name="password"
//           placeholder="비밀번호"
//           type="password"
//         />
//         <div className="myLabel">비밀번호 확인</div>
//         <StyledInput
//           autoComplete="new-password-check"
//           name="passwordCheck"
//           placeholder="비밀번호를 한 번 더 입력해주세요"
//           type="passwordCheck"
//         />
//         <div className="myLabel">닉네임</div>
//         <StyledInput
//           autonComplete="nickname"
//           name="nickname"
//           placeholder="닉네임"
//         />
//         <div className="myLabel">이메일</div>
//         <StyledInput autonComplete="email" name="email" placeholder="이메일" />
//         <div className="myLabel">전화번호</div>
//         <StyledInput
//           autonComplete="phone"
//           name="phone"
//           placeholder="전화번호"
//         />
//         <div className="myLabel">직업</div>
//         <StyledInput autonComplete="job" name="job" placeholder="직업" />

//         <div className="myLabel">희망 활동 지역(하나만 선택해주세요)</div>

//         <Radio.Group
//           options={addressOptions}
//           onChange={onChangeAddress}
//           optionType="button"
//           buttonStyle="solid"
//         />

//         <div className="myLabel">기술스택(중복 선택 가능)</div>

//         <Checkbox.Group
//           options={[
//             { label: '서버/DB', value: 'server' },
//             { label: '프론트엔드', value: 'frontend' },
//             { label: '풀스택', value: 'fullstack' },
//             { label: '안드로이드', value: 'android' },
//             { label: 'IOS', value: 'ios' },
//             { label: '머신러닝', value: 'machineLearning' },
//             { label: 'AI', value: 'ai' },
//             { label: '사물인터넷(IoT)', value: 'iot' },
//             { label: '게임 클라이언트', value: 'gameClient' },
//             { label: '게임 서버', value: 'gameServer' },
//           ]}
//         ></Checkbox.Group>

//         <Button cyan fullWidth style={{ marginTop: '1rem' }}>
//           회원가입
//         </Button>
//       </form>
//       <Footer>
//         <Link to="/login">로그인</Link>
//       </Footer>
//     </AuthFormBlock>
//   );
// };
// export default AuthFormRegister;
