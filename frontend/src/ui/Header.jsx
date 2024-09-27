import { NavLink, useNavigate } from "react-router-dom";
import NavItems from "./NavItems";
import Menu from "../ui/Menu";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/authentication/userSlice";
import { auth } from "../features/authentication/firebase";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/invoice-dashboard");
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between items-center h-[15vw] md:h-[5vw] lg:h-[3vw] bg-slate-400 to-transparent">
      <div className="flex items-center ml-1">
        <Menu />

        <h2 className="p-2 ml-2 font-bold">
          <NavLink to="/">ParasInvoice</NavLink>
        </h2>
      </div>
      <ul className="flex items-center list-none p-2">
        <NavItems />
      </ul>
    </div>
  );
}

export default Header;
