import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import ReactMdSize from "./ReactMdSize";
import { useEffect } from "react";
interface props {
  click: boolean;
  setclick: React.Dispatch<React.SetStateAction<boolean>>;
}
function Navbar({ click, setclick }: props) {
  function Toggle() {
    setclick(!click);
  }
  const data = ReactMdSize();
  useEffect(() => {
    data && click ? setclick((prev) => !prev) : null;
  }, [data]);
  console.log(click);
  return (
    <nav className="flex justify-between items-center md:items-stretch w-[95%] mx-auto  flex-wrap relative ">
      <a
        href="#"
        className=" text-xl
      bg-containerColor py-1 px-4
      rounded text-textColor shadow-md
      "
      >
        SockBar
      </a>

      <a href="#" className="md:hidden" onClick={Toggle}>
        {!click ? <FaBars size={34} /> : <RxCrossCircled size={34} />}
      </a>
      <ul
        className={` w-full mt-5 md:gap-0 md:m-0 
        md:w-auto md:flex md:items-center bg-containerColor rounded text-textColor

        ${!click ? "hidden" : "absolute top-[50px] left-0 animate-fade-down"}`}
      >
        <li>
          <a href="#" className="mx-4 block py-3 md:p-0  ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mx-4 block py-3 md:p-0  ">
            List
          </a>
        </li>
        <li>
          <a href="#" className="mx-4 block py-3 md:p-0  ">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className="mx-4 block py-3 md:p-0  ">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
