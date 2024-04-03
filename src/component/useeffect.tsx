import { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("blue");
    const intervalId = setInterval(() => {
      setCount(count + 1); // You want to increment the counter every second...
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); //  ... but specifying `count` as a dependency always resets the interval.
  // ...
  console.log(count);
  return <p>{count}</p>;
}
export default Counter;
