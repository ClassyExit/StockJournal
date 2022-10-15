/*
Example sending out a notification
type: info, error, warning, success

sendNotification({
        type: "info",  
        heading: "Header",
        message: "Hi there, this is the msg",
      });

Default: If no parameters assigned

sendNotification({})

sendNotification({
        type = "info",
        heading = "Notification",
        message = "...",
      });
*/

export const sendNotification = ({
  type = "info",
  heading = "Notification",
  message = "...",
}) => {
  let notificationBox = document.querySelector(".notification-box");

  // Types of alerts
  const alerts = {
    info: {
      icon: `<svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="blue">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
      color: "blue-500",
    },
    error: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="red">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
      color: "red-500",
    },
    warning: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="yellow">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>`,
      color: "yellow-500",
    },
    success: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="green">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
      color: "green-500",
    },
  };

  // If type is not in the alert, default to info
  if (!(type in alerts)) {
    type = "info";
  }

  /* Set the contents of the notification */
  let component = document.createElement("div");

  component.className = `relative flex items-center bg-notification_bg text-white text-sm font-bold px-4 py-3 rounded-md 
  opacity-0 transform transition-all duration-500 mb-1`;

  let content = document.createElement("content");

  content.innerHTML =
    `<div class="flex flex-col text-headline"><h1 class="text-lg">${heading}</h1>` +
    `<p class="text-xs text-paragraph">${message}</p></div>`;

  component.innerHTML = `${alerts[type].icon} ${content.innerHTML}`;

  notificationBox.appendChild(component);

  /* Appearing on screen */
  setTimeout(() => {
    component.classList.remove("opacity-0");
    component.classList.add("opacity-1");
  }, 1); //1ms For fixing opacity on new element
  setTimeout(() => {
    component.classList.remove("opacity-1");
    component.classList.add("opacity-0");
    component.style.margin = 0;
    component.style.padding = 0;
  }, 5000);
  setTimeout(() => {
    component.style.setProperty("height", "0", "important");
  }, 5100);
  setTimeout(() => {
    notificationBox.removeChild(component);
  }, 5700);
};
