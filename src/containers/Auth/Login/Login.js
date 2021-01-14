import { useState } from "react";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onChangeLogin = (event) => {
    setLogin(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onClick = () => {
    alert(password);
  };
  return (
    <div className="Login">
      <Input
        onChange={onChangeLogin}
        value={login}
        type="email"
        placeholder="Login"
      />
      <Input
        onChange={onChangePassword}
        value={password}
        type="password"
        placeholder="Password"
      />
      <Button onClick={onClick}>Login</Button>
    </div>
  );
};

export default Login;
