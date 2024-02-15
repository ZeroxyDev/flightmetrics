"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Titlebar from "./components/layout/titlebar";
import { MCDUContextProvider } from "./context/mcduContext";
import { useEffect, useState } from "react";
import Footer from "./components/layout/footer";
import { SimbriefContextProvider } from "./context/simbriefContext";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

interface WindowProps extends Window {
  __TAURI__?: boolean;
}
declare const window: WindowProps;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isTauri, setIsTauri] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('contextmenu', event => event.preventDefault());

    if (window?.__TAURI__) {
      console.log('Tauri detected');
      setIsTauri(true);
    }
  }, []);

  return (
    <html lang="en">
      <body className={`rounded-[40px]  m-0 ${isTauri ? 'bg-transparent' : 'bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#ffffff10_1px)] bg-[size:20px_20px]'} overflow-hidden`}>
        <div style={{ height: isTauri ? '700px' : '100vh' }} className={`bg-[#000000] bg-[radial-gradient(#ffffff20_1px,#ffffff10_1px)] bg-[size:20px_20px] w-full ${isTauri ? 'h-[600px]' : 'h-screen'} flex justify-center items-center bordernone border-tertiary rounded-big`}>
        {isTauri && <div className='h-12 mb-8 block z-20'><Titlebar /></div>}
        {!isTauri &&<Link href={"/settings"} className="inline-flex z-50 fixed top-[20px] right-[20px] justify-center items-center w-[30px] h-[30px] cursor-pointer text-primary"><IoMdSettings/></Link>}
        <div className='w-full z-10 flex justify-center items-center h-full '>
          <SimbriefContextProvider>
        <MCDUContextProvider>
          {children}
        </MCDUContextProvider>
        </SimbriefContextProvider> 
          </div>
          {isTauri && <Footer/>}
      </div>
      </body>
    </html>
  );
}
