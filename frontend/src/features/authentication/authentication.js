import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

export const signUpUser = async (email, password, name) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  await updateProfile(user, { displayName: name });

  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
  };
};

export const signInUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export function handleSignOut() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
}
