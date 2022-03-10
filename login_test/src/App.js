import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const callApi = async () => {
    axios.get("/api").then((res) => {
      console.log(res.data.test);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

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
    const saveInput = `${inputValue1}, ${inputValue2}, ${inputValue3}, ${inputValue4}`;
    console.log(saveInput);
    setInputValue1("");
    setInputValue2("");
    setInputValue3("");
    setInputValue4("");
  };

  return (
    <div className="App">
      <input
        value={inputValue1}
        onChange={changeValue1}
        placeholder="아이디"
      ></input>
      <input
        value={inputValue2}
        onChange={changeValue2}
        placeholder="비밀번호"
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
    </div>
  );
};

export default App;
