
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User } from "@supabase/supabase-js";
import { AuthContextType, Profile, UserRole } from "@/types/auth.types";
import { fetchProfile, fetchRoles, signInUser, signUpUser, signOutUser } from "@/services/authService";
import { hasRole } from "@/utils/roleUtils";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [roles, setRoles] = useState<UserRole[]>([]);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

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

  const signIn = signInUser;
  const signUp = signUpUser;
  const signOut = signOutUser;

  const isAdmin = () => hasRole(roles, 'admin');
  const isStaff = () => hasRole(roles, 'staff');

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
