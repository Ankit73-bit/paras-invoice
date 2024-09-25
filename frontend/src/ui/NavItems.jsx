import { NavLink } from "react-router-dom";

function NavItems() {
  return (
    <>
      <li className="mr-10">
        <NavLink to="/signIn">SignIn</NavLink>
      </li>
      {/* <li>searchbar</li>
      <li>profile</li> */}
    </>
  );
}

export default NavItems;
