
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, UserCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation } from "react-router-dom";

const AuthNavItems = () => {
  const { user, signOut, isAdmin } = useAuth();
  const location = useLocation();
  const isOnDashboard = location.pathname.startsWith('/dashboard');

  if (user) {
    return (
      <div className="flex items-center gap-4">
        {isAdmin() && isOnDashboard && (
          <span className="hidden md:inline-block text-sm text-blue-600 font-medium">
            Admin Mode
          </span>
        )}
        
        <span className="text-sm hidden md:inline-block">
          {user.email}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="flex items-center gap-2"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden md:inline-block">Logout</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Button variant="outline" size="sm" asChild>
        <Link to="/login" className="flex items-center gap-2">
          <UserCircle className="h-4 w-4" />
          <span>Login</span>
        </Link>
      </Button>
    </div>
  );
};

export default AuthNavItems;
