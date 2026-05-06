import React from 'react';
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-blob blob1"></div>
        <div className="bg-blob blob2"></div>
         <Navbar />
        {children}
      </body>
    </html>
  );
}