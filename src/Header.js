import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

const Header = () => {
  const { width } = useWindowSize();
  return (
    <header className="">
      <h1>
        The Width is:
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 992 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </h1>
    </header>
  );
};

export default Header;
