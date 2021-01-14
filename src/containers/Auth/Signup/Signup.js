import { useState } from "react";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onClick = () => {
    alert(password);
  };

  return (
    <div className="Signup">
      <Input
        onChange={onChangeFirstName}
        value={firstName}
        type="text"
        placeholder="First Name"
      />
      <Input
        onChange={onChangeLastName}
        value={lastName}
        type="text"
        placeholder="Last Name"
      />
      <Input
        onChange={onChangeEmail}
        value={email}
        type="email"
        placeholder="Email"
      />
      <Input
        onChange={onChangePassword}
        value={password}
        type="password"
        placeholder="Password"
      />
      <Button onClick={onClick}>Click </Button>
    </div>
  );
};

export default Signup;
