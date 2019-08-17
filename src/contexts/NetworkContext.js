import React, { useEffect, useState } from "react";

const NetworkContext = React.createContext({
  status: "online"
});

export const NetowrkProvider = ({ children }) => {
  const [status, setStatus] = useState("online");

  useEffect(() => {
    window.addEventListener("online", () => setStatus("online"));
    window.addEventListener("offline", () => setStatus("offline"));
  }, []);

  return (
    <NetworkContext.Provider value={{ status }}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkContext;
