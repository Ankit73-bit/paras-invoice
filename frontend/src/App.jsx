import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./ui/HomePage";
import SignInUser from "./features/authentication/SignInUser";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/signIn", element: <SignInUser /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
