
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const { signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Load reCAPTCHA Enterprise script
    const script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/enterprise.js?render=6Lf7GvYqAAAAAPRCHxDWIgKRn9YoCKC6liuqkRqo";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const executeRecaptcha = async () => {
    if (window.grecaptchaEnterprise) {
      return new Promise<string>((resolve) => {
        window.grecaptchaEnterprise.ready(async () => {
          const token = await window.grecaptchaEnterprise.execute(
            '6Lf7GvYqAAAAAPRCHxDWIgKRn9YoCKC6liuqkRqo', 
            { action: 'REGISTER' }
          );
          resolve(token);
        });
      });
    } else {
      throw new Error("reCAPTCHA Enterprise not loaded");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Execute reCAPTCHA Enterprise and get token
      const token = await executeRecaptcha();
      setRecaptchaToken(token);
      
      console.log("reCAPTCHA Enterprise token:", token);
      
      // Proceed with signup
      const { error, data } = await signUp(email, password);
      
      if (error) {
        throw error;
      }
      
      // Update profile with first and last name if provided
      if (data?.user && (firstName || lastName)) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            first_name: firstName,
            last_name: lastName
          })
          .eq('id', data.user.id);
          
        if (profileError) {
          console.error("Error updating profile:", profileError);
          // We still proceed with successful registration
        }
      }
      
      toast({
        title: "Success",
        description: "Account created successfully. Please check your email for verification.",
      });
      
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create account",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Log in here
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <div className="mt-1 relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                  </span>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="pl-10"
                    placeholder="John"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <div className="mt-1 relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                  </span>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="pl-10"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Mail className="h-5 w-5 text-gray-400" />
                </span>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="h-5 w-5 text-gray-400" />
                </span>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="h-5 w-5 text-gray-400" />
                </span>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <p>This site is protected by reCAPTCHA Enterprise and the Google 
            <a href="https://policies.google.com/privacy" className="text-primary hover:underline"> Privacy Policy</a> and 
            <a href="https://policies.google.com/terms" className="text-primary hover:underline"> Terms of Service</a> apply.</p>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
