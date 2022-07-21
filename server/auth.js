import {User} from './config.js'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// const app = ​​initializeApp(firebaseConfig);
​​const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
        });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};