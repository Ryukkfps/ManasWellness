'use client';

import { useState } from 'react';
import { signIn, SessionProvider } from 'next-auth/react';
import { Logo } from '@/components/brand/Logo';
import { Field, Input } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
      const callbackUrl = `${currentOrigin}/admin`;

      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl,
      });

      if (result?.error) {
        setError('Invalid credentials');
      } else if (result?.url) {
        window.location.href = result.url;
      } else {
        window.location.href = callbackUrl;
      }
    } catch {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sand px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgba(43,47,44,0.08)]">
        <div className="text-center flex flex-col items-center gap-2">
          <Logo />
          <p className="text-sm text-ink-muted">Admin Dashboard</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-[#f0e6e4] border border-[#a65450]/30 text-[#a65450] px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}
          <Field label="Email" htmlFor="email" required>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@manaswellness.in"
            />
          </Field>
          <Field label="Password" htmlFor="password" required>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </Field>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLogin() {
  return (
    <SessionProvider>
      <LoginForm />
    </SessionProvider>
  );
}
