import { useEffect } from "react";
import { useState } from "react";

function ReactMdSize() {
  const [mdsize, setmdsize] = useState(false);
  useEffect(() => {
    console.log("hi");
    const handleMdSize = () => {
      setmdsize(window.innerWidth >= 768);
    };
    handleMdSize();
    window.addEventListener("resize", handleMdSize);

    return () => {
      window.removeEventListener("resize", handleMdSize);
    };
  }, []);
  console.log("Component re-rendered");
  return mdsize;
}

export default ReactMdSize;
