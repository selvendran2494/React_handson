import { useEffect, useState } from "react";

const useOnlinestatus = () => {
  const [onlinestatus, setonlinestatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("You are now connected to the network.");
      setonlinestatus(true);
    });
    window.addEventListener("offline", () => {
      console.log("You are not connected to the network.");
      setonlinestatus(false);
    });
  }, []);
  return onlinestatus;
};
export default useOnlinestatus;
