import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { auth } = useAuth();
  return auth.token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
