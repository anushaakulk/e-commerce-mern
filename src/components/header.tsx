import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";
// import { User } from "../types/types";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";
// import toast from "react-hot-toast";

const header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="header">
      <Link onClick={() => setIsOpen(false)} to={"/"}>
        HOME
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
    </nav>
  )
}

export default header
