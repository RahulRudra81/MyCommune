import { useContext } from "react";
import AuthContext from "./AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import { SignOut } from "./firebaseConfig";

const signOut = () => {
  const handleLogout = async () => {
   await SignOut();
  };
}
if (!user) {
        return <Navigate replace to="/SignIn" />;
      }

export default signOut;