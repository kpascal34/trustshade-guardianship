
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

type ProtectedRouteProps = {
  requireAdmin?: boolean;
  requireStaff?: boolean;
};

const ProtectedRoute = ({ requireAdmin = false, requireStaff = false }: ProtectedRouteProps) => {
  const { user, loading, isAdmin, isStaff } = useAuth();
  const location = useLocation();

  // While checking the authentication state, show loading indicator
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If no user is found, redirect to the login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if admin role is required
  if (requireAdmin && !isAdmin()) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Check if staff role is required
  if (requireStaff && !(isStaff() || isAdmin())) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If the user is authenticated and has the required role, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
