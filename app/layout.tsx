'use client';
import type { Metadata } from "next";
import { Anek_Tamil, Geist, Geist_Mono, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { Box, Container, CssBaseline } from "@mui/material";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";


const notoSansTamil = Noto_Sans_Tamil({
  variable:"--font-noto-sans-tamil",
  subsets:['latin']
})

const anekTamil = Anek_Tamil({
  variable: "--font-anek-tamil",
  subsets: ["latin"],
});


 const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anekTamil.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Navbar/>
          
          <Box sx={{mt:4,minHeight:'100vh'}}>
            {children}
          </Box>
         
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
