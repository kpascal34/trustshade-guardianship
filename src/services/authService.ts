
import { supabase } from "@/integrations/supabase/client";
import { Profile, UserRole } from "@/types/auth.types";

// Function to fetch user profile
export const fetchProfile = async (userId: string): Promise<Profile | null> => {
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
export const fetchRoles = async (userId: string): Promise<UserRole[]> => {
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

// Function to sign in a user
export const signInUser = async (email: string, password: string) => {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
};

// Function to sign up a user
export const signUpUser = async (email: string, password: string) => {
  return supabase.auth.signUp({
    email,
    password,
  });
};

// Function to sign out a user
export const signOutUser = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error);
  }
};
