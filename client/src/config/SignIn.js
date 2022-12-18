import { useState } from "react";
import { SignIn } from "./firebaseConfig";

const signIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res = await SignIn(email, password);
    if (res.error) seterror(res.error);
  };
}

export default SignIn;