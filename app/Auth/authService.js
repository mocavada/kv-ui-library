import {} from 'firebase';
import {
    GithubAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    updatePassword,
    deleteUser,
    GoogleAuthProvider
} from 'firebase/auth'

import { actionCodeSettings } from "../Configs/firebase.config";

class AuthService {
    constructor(firebaseApp) {
        this.auth = getAuth(firebaseApp);
    };
};

function waitForUser(callback) {
    return onAuthStateChanged(this.auth, (useCred) => {
        callback(useCred);
    });
};

function loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
    .then((useCred)=> {
        return {
            user: useCred.user,
        };
    })
    .catch((error) => {
        return {
            error: error.message,
        };
    });
}

async function logout() {
    await signOut(this.auth).then(() => console.log("Log Out Succesful"));
}



async function signUp (email, password) {
    try {
      const userCred = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      await sendEmailVerification(userCred.user, {
        url: "https://bcbpcanada.com",
      }).then(() => {
        console.log("Email Verification Sent").catch((e) => {
          console.log("Email Verification  Error:", e);
        });
      });

      return {
        user: userCred.user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  }

  async function signIn(email, password) {
    try {
      const userCred = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return {
        user: userCred.user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  }

  async function resetPassword(email) {
    try {
      await sendPasswordResetEmail(this.auth, email, {
        url: "https://bcbpcanada.com",
      });
      return {
        message: "Password Reset Successful!",
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  }

  async function deleteAccount() {
    try {
      await deleteUser(this.auth.currentUser);
      return {
        message: "Account Deleted",
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  }

  async function updatePassword(newPassword) {
    try {
      await updatePassword(this.auth.currentUser, newPassword);
      return {
        message: "Password Update Successfully",
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  }


export default new AuthService(getApp());
