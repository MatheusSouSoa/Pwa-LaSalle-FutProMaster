import { GoogleAuthProvider, User, getAdditionalUserInfo } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { child, get, ref, set } from "firebase/database";


 async function AuthService() {
    const user = await signInWithPopup(auth, new GoogleAuthProvider())

    const {isNewUser} = getAdditionalUserInfo(user)!
    if(isNewUser) 
        RegisterOnDB(user.user)
    return user
}

async function RegisterOnDB(user:User) {
    set(ref(db, `users/${user.uid}`), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
        createAt: new Date().toString()
    })
}

async function getUserData(uid: string) {
    const userData = await get(child(ref(db), `/users/${uid}`))
    return userData.val()
}

export {
    AuthService,
    getUserData
}
