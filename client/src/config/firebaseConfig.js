import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEk3K8wS2gVPitDZVPtPHrpnX2hKMPtwA",
    authDomain: "service-provider-a1b28.firebaseapp.com",
    projectId: "service-provider-a1b28",
    storageBucket: "service-provider-a1b28.appspot.com",
    messagingSenderId: "421162419449",
    appId: "1:421162419449:web:70a9575a81fb39b83fce28",
    measurementId: "G-6NGXS1MW66"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const SignUp = async (req,res) => {
    try {
        const data = req.body;
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;

        const response = await addDoc(doc(db, "users/"+user.uid),  {
            username: data.username,
            email: user.email
        })
        res.send(user.id);
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
}

const SignIn = async (req,res) => {
    try {
         const data = req.body;
         const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
         const user = userCredential.user;  

        return true
    } 
  catch (error) {
     console.log(error);
     res.send(error.message);
  }
}

const SignOut = async() => {
    try {
      await signOut(auth)
      return true
    } catch (error) {
      return false
    }
  };


export {auth, SignIn, SignOut, SignUp};
export default app