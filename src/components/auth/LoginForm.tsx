
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

interface LoginFormProps {
  email: string;
  password: string;
  isLoading: boolean;
  recaptchaValue: string | null;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onRecaptchaChange: (value: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LoginForm = ({
  email,
  password,
  isLoading,
  recaptchaValue,
  onEmailChange,
  onPasswordChange,
  onRecaptchaChange,
  onSubmit,
}: LoginFormProps) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div className="space-y-4">
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
              onChange={(e) => onEmailChange(e.target.value)}
              className="pl-10"
              placeholder="email@example.com"
            />
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
          </div>
          <div className="mt-1 relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Lock className="h-5 w-5 text-gray-400" />
            </span>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              className="pl-10"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <ReCAPTCHA
          sitekey="6Lf7GvYqAAAAAPRCHxDWIgKRn9YoCKC6liuqkRqo"
          onChange={onRecaptchaChange}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading || !recaptchaValue}
      >
        {isLoading ? "Logging in..." : "Log in"}
      </Button>
    </form>
  );
};

export default LoginForm;
