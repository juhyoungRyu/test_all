import axios from "axios";
import { useEffect } from "react";
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

  return (
    <div className="App">
      <input placeholder="아이디"></input>
      <input placeholder="비밀번호"></input>
      <input placeholder="이메일"></input>
      <input placeholder="닉네임"></input>
    </div>
  );
};

export default App;
