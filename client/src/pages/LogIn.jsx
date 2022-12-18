import React, {useState} from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBCard, MDBInput} from "mdb-react-ui-kit";
import axios from "axios";
import SignIn from "./SignIn"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await SignIn(email, password);
    if (res.error) seterror(res.error);
  };
  return (
    <>
      {error ? <div>{error}</div> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" value="submit" >Submit</button>
      </form>
    </>
  );
};

export default Login;