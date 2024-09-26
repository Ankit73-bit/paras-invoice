import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../features/authentication/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

function NavItems() {
  const navigate = useNavigate();
  const name = useSelector((store) => store.user);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {auth.currentUser ? (
        <>
          <li className="mr-10 cursor-pointer" onClick={handleSignOut}>
            Logout
          </li>
          <li className="mr-10">{name?.displayName}</li>
        </>
      ) : (
        <li className="mr-10">
          <NavLink to="/signin">SignIn</NavLink>
        </li>
      )}
    </>
  );
}

export default NavItems;
