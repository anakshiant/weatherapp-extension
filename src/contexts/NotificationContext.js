import React from "react";

const NotificationContext = React.createContext({});

export const NotificationProvider = ({ children }) => {
  const notify = text => {
    alert(text);
  };

  return (
    <NotificationContext.Provider value={notify}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
