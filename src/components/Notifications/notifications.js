import logo from "@/assets/images/logo.png";

export const Notifications = () => {
  // Request premission for notifications
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      alert(perm);

      new Notification("This is the title", {
        body: "This is more text",
        icon: logo,
      });
    }
  });
};
