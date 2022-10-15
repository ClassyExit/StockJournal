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
  onAuthStateChanged,
} from "firebase/auth";

import { resetStore } from "./reset-store";
import { useNotificationStore as notificationStore } from "./notifications";
import emailjs from "@emailjs/browser";

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
    showEmailModal: false,
    emailStatus: null,
    emailStatusMsg: null,
    preferences: {
      sidebar: true,
    },
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

      notificationStore().addNotification({
        type: "success",
        message:
          "Hi there! If you run into any issues, please send a ticket in by clicking the mail icon on the left and we'll be happy to help you out.",
        title: "Welcome!",
      });

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
      resetStore();

      router.push("/home");
    },

    async InitializeAuth() {
      // CHECK TO SEE AUTHENTICATION STATE
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User signed in
          this.user = auth.currentUser;
          this.userId = auth.currentUser.uid;

          if (
            router.currentRoute.value.fullPath ===
            ("/home" || "/login" || "/register")
          ) {
            router.push({ name: "Dashboard" });
          }
        } else {
          // User is signed out
          // Reset all stores/ local store data
          resetStore();
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
                this.passwordChangeSuccess = "Password Changed Successfully!";

                notificationStore().addNotification({
                  type: "success",
                  message: "Your password has been updated successfully!",
                  title: "Password Updated",
                });
              })
              .catch((error) => {
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
      const deleteMsg = "Enter current password to confirm account deletion";
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
                alert("Account Deleted Successfully");
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
    isValidEmail(email) {
      var regex =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    },

    async sendEmailSupport(ticketForm) {
      const publicKey = "Yj_tvHNw9M8KafTN_";
      const serviceID = "service_4pt8037";
      const templateID = "template_7k7a6tp";
      const emailID = Math.floor(100000 + Math.random() * 900000);

      let emailParams = {
        email: ticketForm.email,
        message: ticketForm.message,
        subject: ticketForm.subject,
        id: emailID,
      };

      //check if valid email
      if (!this.isValidEmail(emailParams.email)) {
        this.emailStatus = 400;
        this.emailStatusMsg = "Please enter a valid email";
        return;
      }
      // send email
      await emailjs.send(serviceID, templateID, emailParams, publicKey).then(
        (result) => {
          this.emailStatus = result.status;
          this.emailStatusMsg = `We've recieved your inquiry. We'll get back to you as soon as possible. Thank you.`;

          notificationStore().addNotification({
            type: "success",
            message: `We appreicate your wait as we process your ticket. If you need to follow up regarding the ticket, please include your ticket ID: ${emailParams.id}.`,
            title: "Support Ticket",
          });

          return;
        },
        (error) => {
          this.emailStatus = 400;
          this.emailStatusMsg = error.text;
        }
      );
    },
  },
});
