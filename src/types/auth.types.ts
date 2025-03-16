
import type { Session, User, AuthResponse } from "@supabase/supabase-js";

export interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  bio: string | null;
  website: string | null;
  company: string | null;
}

export interface UserRole {
  id: string;
  user_id: string;
  role: 'admin' | 'staff' | 'user';
  created_at: string;
}

export type AuthContextType = {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  roles: UserRole[];
  signIn: (email: string, password: string) => Promise<AuthResponse>;
  signUp: (email: string, password: string) => Promise<AuthResponse>;
  signOut: () => Promise<void>;
  loading: boolean;
  isAdmin: () => boolean;
  isStaff: () => boolean;
  refreshProfile: () => Promise<void>;
};
