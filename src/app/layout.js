'use client'

import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from '@/contexts/AuthContext';
import { auth, onAuthStateChanged } from '@/lib/firebase';
import { useEffect, useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Umfrage: online polling website",
  description: "Created by Mohamed Hazem Hassine and Yasmine Marzouk",
};


export default function RootLayout({ children }) {

  const [UID, setUID] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUID(user);
      } else {
        setUID(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
