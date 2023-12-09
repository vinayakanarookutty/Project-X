
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc/client";
import { api } from "@/lib/trpc/server-client";
import { AppRouter } from "@/server";

export default async function Home() {
  const getHelloQuery = await api.hello.query()
  const resr:ReturnType<AppRouter["hello"]> = ""
  console.log(getHelloQuery)
  return (
  <div>
    <Button>Hello click me</Button>
  </div>
  )
}
