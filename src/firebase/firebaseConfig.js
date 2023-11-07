import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGxp3g59NzioPvv13pM9vz4_C1W6exX5Q",
  authDomain: "unssplash-e70ec.firebaseapp.com",
  projectId: "unssplash-e70ec",
  storageBucket: "unssplash-e70ec.appspot.com",
  messagingSenderId: "62960751846",
  appId: "1:62960751846:web:a21a0af03261506f03d727",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export const signUpLogin = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
