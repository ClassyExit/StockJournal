import { defineStore } from "pinia";
import router from "../router";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";

import { resetStore } from "./reset-store";

export const useUserStore = defineStore("User", {
  state: () => ({
    user: null,
    userId: null,
    authErrors: null,
    resetErrors: false,
    resetSuccess: false,
    passwordChangeErrors: false,
    passwordChangeSuccess: false,
    deleteErrors: false,
    lastURL: null,
  }),
  getters: {},
  persist: true,
  actions: {
    async login(details) {
      // LOGIN A EXISTING USER
      const { email, password } = details;

      this.authErrors = null;
      // Try to login user
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            this.authErrors = "Invalid email or password";
            break;
          case "auth/missing-email":
            this.authErrors = "Invalid email or password";
            break;
          case "auth/missing-password":
            this.authErrors = "Invalid email or password";
            break;
          case "auth/invalid-email":
            this.authErrors = "Invalid email or password";
            break;
          case "auth/wrong-password":
            this.authErrors = "Invalid email or password";
            break;
          default:
            this.authErrors = `Invalid email or password`;
        }
        return;
      }

      this.$patch({
        user: auth.currentUser,
        userId: auth.currentUser.uid,
      });

      router.push("/dashboard");
    },

    async register(details) {
      // REGISTER A NEW USER
      const { email, password } = details;

      this.authErrors = null;
      // Try to register user
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            this.authErrors = "Email already in use";
            break;
          case "auth/invalid-email":
            this.authErrors = "Invalid email";
            break;
          case "auth/operation-not-allowed":
            this.authErrors = "Operation not allowed";
            break;
          case "auth/weak-password":
            this.authErrors = "Password must be atleast 6 characters";
            break;
          default:
            this.authErrors = `Enter a valid email or password`;
        }

        return;
      }

      // Set user state
      this.$patch({
        user: auth.currentUser,
        userId: auth.currentUser.uid,
      });

      router.push("/dashboard");
    },

    async logout() {
      // Sign out from firebase
      await signOut(auth);

      // Reset store
      this.$reset();
      resetStore();

      router.push("/home");
    },

    async InitializeAuth() {
      // CHECK TO SEE AUTHENTICATION STATE

      auth.onAuthStateChanged(async (user) => {
        if (user) {
          this.user = auth.currentUser;
          this.userId = auth.currentUser.uid;

          if (this.lastURL !== ("/login" || "/register" || "home")) {
            router.push(`${this.lastURL}`);
          } else {
            router.push({ name: "Dashboard" });
          }
        } else {
          this.$reset();
        }
      });
    },

    async resetPassword(email) {
      // SEND USER A RESET PASSWORD LINK
      this.resetErrors = false;
      this.resetSuccess = false;

      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          this.resetSuccess = "success";
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              this.resetErrors = "No account found with that email";
              break;
            case "auth/missing-email":
              this.resetErrors = "Enter your email used during registration";
              break;
            default:
              this.resetErrors = `Something went wrong - Try again`;
              break;
          }
          console.log(`Error code: ${error.code}`);
        });
    },

    async changePassword(currentPassword, newPassword) {
      this.passwordChangeErrors = false;
      this.passwordChangeSuccess = false;

      const auth = getAuth();
      const user = auth.currentUser;

      try {
        const credential = EmailAuthProvider.credential(
          user.email,
          currentPassword
        );

        reauthenticateWithCredential(user, credential)
          .then(() => {
            updatePassword(user, newPassword)
              .then(() => {
                //Update success
                this.passwordChangeSuccess = "Success - Password Changed!";
              })
              .catch((error) => {
                console.log(`Failed - code: ${error.code}`);
                this.passwordChangeErrors = "Something went wrong";
              });
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/wrong-password":
                this.passwordChangeErrors = "Incorrect Current Password";
                break;
              case "auth/too-many-requests":
                this.passwordChangeErrors =
                  "Too many requests - try again later";
                break;
              default:
                this.passwordChangeErrors = "Something went wrong";
                break;
            }
          });
      } catch (error) {
        this.passwordChangeErrors = "Something went wrong";
      }
    },

    async deleteUserAccount() {
      const deleteMsg = "Input current passsword to confirm account deletion";
      let currentPassword = prompt(deleteMsg);

      if (!currentPassword) return;

      const auth = getAuth();
      const user = auth.currentUser;

      try {
        const credential = EmailAuthProvider.credential(
          user.email,
          currentPassword
        );

        reauthenticateWithCredential(user, credential)
          .then(() => {
            deleteUser(user)
              .then(() => {
                //User Deleted
                // Reset store
                this.$reset();
                alert("Account Deletion Successful");
                // Push to homepage
                router.push("/home");
              })
              .catch((error) => {
                //Error
                this.deleteErrors = "Something went wrong";
              });
          })
          .catch((error) => {
            //Error
            switch (error.code) {
              case "auth/wrong-password":
                this.deleteErrors = "Incorrect Current Password";
                break;
              case "auth/too-many-requests":
                this.deleteErrors = "Too many requests - try again later";
                break;
              default:
                this.deleteErrors = "Something went wrong";
                break;
            }
          });
      } catch (error) {
        //error
        this.deleteErrors = "Something went wrong";
      }
    },
  },
});
