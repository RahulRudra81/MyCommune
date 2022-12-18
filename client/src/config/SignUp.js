import { useState } from "react";
import { Link } from "react-router-dom";
import { SignUp } from "./firebaseConfig";


const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      seterror("Passwords do not match");
    } else {
      setEmail("");
      setPassword("");
      const res = await SignUp(email, password);
      if (res.error) seterror(res.error)
    }
  };
}

export default signUp;