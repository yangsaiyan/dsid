'use client'
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Providers } from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        style={{
          backgroundImage: `linear-gradient(145deg, rgba(73,73,73,0.6) 0%, rgba(0,0,0,1) 100%), 
          url("/assets/images/indexBackground.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
