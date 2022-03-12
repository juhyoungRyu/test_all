import { useState } from "react";
import "./Signup.css";

const Signup = ({ logSet }) => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");

  const changeValue1 = (e) => {
    setInputValue1(e.target.value);
  };

  const changeValue2 = (e) => {
    setInputValue2(e.target.value);
  };

  const changeValue3 = (e) => {
    setInputValue3(e.target.value);
  };

  const changeValue4 = (e) => {
    setInputValue4(e.target.value);
  };

  const clickBtn = () => {
    const saveInput = {
      Id: inputValue1,
      Pw: inputValue2,
      Email: inputValue3,
      name: inputValue4,
    };
    console.log(saveInput);
    setInputValue1("");
    setInputValue2("");
    setInputValue3("");
    setInputValue4("");
  };

  return (
    <div className="Signup">
      <input
        value={inputValue1}
        onChange={changeValue1}
        placeholder="아이디"
      ></input>
      <input
        value={inputValue2}
        onChange={changeValue2}
        placeholder="패스워드"
      ></input>
      <input
        value={inputValue3}
        onChange={changeValue3}
        placeholder="이메일"
      ></input>
      <input
        value={inputValue4}
        onChange={changeValue4}
        placeholder="닉네임"
      ></input>
      <button onClick={clickBtn} className="signUp">
        회원가입
      </button>
      <p
        onClick={() => {
          logSet();
        }}
      >
        로그인하기
      </p>
    </div>
  );
};

export default Signup;
