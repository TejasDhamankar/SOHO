"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import React, { Suspense, useState } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const callbackUrl = searchParams.get("callbackUrl") || "/admin/crm";
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
      callbackUrl
    });

    setLoading(false);

    if (!result?.ok) {
      setError(true);
      return;
    }

    router.push(result.url || "/admin/crm");
    router.refresh();
  };

  return (
    <form className="admin-login-card" onSubmit={handleSubmit}>
      <Image src="/logo_shoho.png" alt="The Soho Farms Logo" width={180} height={60} priority />
      <h1>Admin Login</h1>
      <label className="form-label">
        <span>Email</span>
        <input name="email" type="email" className="form-input" required />
      </label>
      <label className="form-label">
        <span>Password</span>
        <input name="password" type="password" className="form-input" required />
      </label>
      {error ? <p className="admin-login-error">Invalid credentials</p> : null}
      <button className="btn-primary" disabled={loading}>
        {loading ? "Signing in..." : "Login"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <main className="admin-login-page">
      <div className="admin-login-gradient" />
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
