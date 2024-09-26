import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import SignInUser from "../features/authentication/SignInUser";
import InvoiceDashboard from "../features/invoice/InvoiceDashboard";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../features/authentication/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/authentication/userSlice";

function AppLayout() {
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/signin", element: <SignInUser /> },
    { path: "/invoice-dashboard", element: <InvoiceDashboard /> },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default AppLayout;
