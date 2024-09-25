import { NavLink } from "react-router-dom";
import NavItems from "./NavItems";
import Menu from "../ui/Menu";

function Header() {
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
