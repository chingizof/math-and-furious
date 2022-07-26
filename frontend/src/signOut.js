import { auth } from "./firebase";
import { signOut } from 'firebase/auth'

export const logout = async () => {
    await signOut(auth);
  };