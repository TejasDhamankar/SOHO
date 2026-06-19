import bcrypt from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function isValidPassword(password: string, storedPassword: string) {
  if (storedPassword.startsWith("$2a$") || storedPassword.startsWith("$2b$") || storedPassword.startsWith("$2y$")) {
    return bcrypt.compare(password, storedPassword);
  }

  return password === storedPassword;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Soho Farms Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword || !credentials?.email || !credentials.password) {
          return null;
        }

        const emailMatches = credentials.email.toLowerCase() === adminEmail.toLowerCase();
        const passwordMatches = await isValidPassword(credentials.password, adminPassword);

        if (!emailMatches || !passwordMatches) {
          return null;
        }

        return {
          id: "soho-admin",
          email: adminEmail,
          name: "Soho Farms Admin"
        };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/admin/login"
  },
  secret: process.env.NEXTAUTH_SECRET
};
