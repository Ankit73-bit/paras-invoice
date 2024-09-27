import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user); // Assuming user is stored in Redux

  // If no user, redirect to signin
  if (!user) {
    return <Navigate to="/signin" />;
  }

  // If user is authenticated, allow access to protected content
  return children;
};

export default ProtectedRoute;
