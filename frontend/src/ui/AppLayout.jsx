import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import SignInUser from "../features/authentication/SignInUser";
import InvoiceDashboard from "../features/invoice/InvoiceDashboard";
import ProtectedRoute from "../features/authentication/ProtectedRoute";

function AppLayout() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/signin", element: <SignInUser /> },
    {
      path: "/invoice-dashboard",
      element: (
        <ProtectedRoute>
          <InvoiceDashboard />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppLayout;
