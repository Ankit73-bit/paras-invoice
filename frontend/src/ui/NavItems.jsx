import { NavLink } from "react-router-dom";
import { auth } from "../features/authentication/firebase";
import { useSelector } from "react-redux";
import { getName } from "../utils/helpers";
import { handleSignOut } from "../features/authentication/authentication";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import { useState } from "react";

function NavItems() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const name = useSelector((store) => store.user);
  const firstName = getName(name?.displayName);

  return (
    <>
      {auth.currentUser ? (
        <>
          <li className="mr-5">
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <span className="text-lg font-bold">{firstName}</span>
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <span onClick={handleSignOut}>Logout</span>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </li>
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
