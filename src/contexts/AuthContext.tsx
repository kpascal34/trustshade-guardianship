
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User, AuthResponse } from "@supabase/supabase-js";

interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  bio: string | null;
  website: string | null;
  company: string | null;
}

interface UserRole {
  id: string;
  user_id: string;
  role: 'admin' | 'staff' | 'user';
  created_at: string;
}

type AuthContextType = {
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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [roles, setRoles] = useState<UserRole[]>([]);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch user profile
  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }

      return data as Profile;
    } catch (error) {
      console.error('Error in fetchProfile:', error);
      return null;
    }
  };

  // Function to fetch user roles
  const fetchRoles = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('*')
        .eq('user_id', userId);

      if (error) {
        console.error('Error fetching roles:', error);
        return [];
      }

      return data as UserRole[];
    } catch (error) {
      console.error('Error in fetchRoles:', error);
      return [];
    }
  };

  // Function to refresh user profile and roles
  const refreshProfile = async () => {
    if (!user) return;
    
    const userProfile = await fetchProfile(user.id);
    if (userProfile) {
      setProfile(userProfile);
    }
    
    const userRoles = await fetchRoles(user.id);
    setRoles(userRoles);
  };

  useEffect(() => {
    // Initialize auth state
    const initAuth = async () => {
      setLoading(true);
      
      // Get session
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      
      if (session?.user) {
        setUser(session.user);
        
        // Fetch profile and roles
        const userProfile = await fetchProfile(session.user.id);
        if (userProfile) {
          setProfile(userProfile);
        }
        
        const userRoles = await fetchRoles(session.user.id);
        setRoles(userRoles);
      } else {
        setUser(null);
        setProfile(null);
        setRoles([]);
      }
      
      // Set up auth state change listener
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (_event, session) => {
          setSession(session);
          
          if (session?.user) {
            setUser(session.user);
            
            // Fetch profile and roles
            const userProfile = await fetchProfile(session.user.id);
            if (userProfile) {
              setProfile(userProfile);
            }
            
            const userRoles = await fetchRoles(session.user.id);
            setRoles(userRoles);
          } else {
            setUser(null);
            setProfile(null);
            setRoles([]);
          }
          
          setLoading(false);
        }
      );

      setLoading(false);
      
      // Cleanup function to remove the listener
      return () => {
        subscription.unsubscribe();
      };
    };

    initAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const signUp = async (email: string, password: string) => {
    return supabase.auth.signUp({
      email,
      password,
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const isAdmin = () => {
    return roles.some(role => role.role === 'admin');
  };

  const isStaff = () => {
    return roles.some(role => role.role === 'staff');
  };

  const value = {
    session,
    user,
    profile,
    roles,
    signIn,
    signUp,
    signOut,
    loading,
    isAdmin,
    isStaff,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
