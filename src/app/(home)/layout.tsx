import NavBar from "@/components/custom/nav-bar";
import { getServerSession } from "next-auth";
import React from "react";

export default async function HomePageLayout({ children }: React.PropsWithChildren) {
  const session = await getServerSession()
  return (
    <div className="relative flex min-h-screen flex-col">
      <NavBar session={session!} />
      <main className="flex-1">{children}</main>
    </div>
  )
}