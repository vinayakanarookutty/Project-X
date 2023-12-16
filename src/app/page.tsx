
import { api } from "@/lib/trpc/server-client";
import { redirect } from "next/navigation";

export default async function Home() {
  return redirect("/home")
  
}
