
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, UserCircle } from "lucide-react";

const AuthNavItems = () => {
  const { user, signOut } = useAuth();

  if (user) {
    return (
      <div className="flex items-center gap-4">
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
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" asChild>
        <Link to="/login" className="flex items-center gap-2">
          <UserCircle className="h-4 w-4" />
          <span>Login</span>
        </Link>
      </Button>
      <Button size="sm" asChild>
        <Link to="/register">Register</Link>
      </Button>
    </div>
  );
};

export default AuthNavItems;
