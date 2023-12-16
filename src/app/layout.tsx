import type { Metadata } from "next";
import { Inter } from "next/font/google";






import "./globals.css";



import { getServerSession } from "next-auth";



import NavBar from "@/components/custom/nav-bar";
import AppProvider, { SessionProvider } from "@/components/custom/providers";
import TrpcProvider from "@/lib/trpc/trpc-provider";
import { cookies } from "next/headers";





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project X",
  description: "Building using next js and trpc",
}

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <TrpcProvider cookies={cookies().toString()}>
            <AppProvider>
              {children}
            </AppProvider>
          </TrpcProvider>
        </SessionProvider>
      </body>
    </html>
  )
}