
import { UserRole } from "@/types/auth.types";

export const hasRole = (roles: UserRole[], roleName: 'admin' | 'staff' | 'user'): boolean => {
  return roles.some(role => role.role === roleName);
};
