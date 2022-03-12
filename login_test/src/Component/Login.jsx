import { useState } from "react";
import "./Login.css";

const Login = ({ signSet }) => {
  return (
    <div className="Login">
      <input placeholder="아이디"></input>
      <input placeholder="패스워드"></input>
      <button>로그인</button>
      <p
        onClick={() => {
          signSet();
        }}
      >
        회원가입하기
      </p>
    </div>
  );
};

export default Login;
