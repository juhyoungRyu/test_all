import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Login from "./Component/Login";
import Signup from "./Component/Signup";

const App = () => {
  const callApi = async () => {
    axios.get("/api").then((res) => {
      console.log(res.data.test);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  const [loginStatus, setLoginStatus] = useState(false);

  const logSet = () => {
    setLoginStatus(true);
    console.log("실행되었습니다", loginStatus);
  };

  const signSet = () => {
    setLoginStatus(false);
    console.log("실행되었습니다", loginStatus);
  };

  return (
    <div className="App">
      {loginStatus ? (
        <Login signSet={signSet}></Login>
      ) : (
        <Signup logSet={logSet}></Signup>
      )}
    </div>
  );
};

export default App;
