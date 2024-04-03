import { useRef, useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function TodoApp() {
  const inputRef = useRef(null);
  const time = new Date().getHours();
  const minute = new Date().getMinutes();
  useEffect(() => {
    if (inputRef.current) {
      flatpickr(inputRef.current, {
        // Flatpickr options here
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: new Date(),
        defaultDate: new Date(),
        minTime: `${time}:${minute}`,
        // Add any other options you need
      });
    }
  }, []); // Run only once after initial render
  return (
    <>
      <input ref={inputRef} type="text" placeholder="Select Date and time" />
      <button type="submit">set</button>
    </>
  );
}

export default TodoApp;
