import { useState } from "react";

import Signup from "./Signup/Signup";
import Login from "./Login/Login";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleview = () => {
    return setIsLogin(!isLogin);
  };

  return (
    <div className="Auth">
      <span onClick={toggleview}>
        {isLogin ? "go to login" : "go to signup"}
      </span>
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
};

export default Auth;
