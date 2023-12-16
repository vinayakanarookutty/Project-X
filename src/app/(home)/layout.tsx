
import { getNextAuthSession } from "@/lib/next-auth"
import NavBar from "@/components/custom/nav-bar"

export default async function HomePageLayout({
  children,
}: React.PropsWithChildren) {
  const session = await getNextAuthSession()
  return (
    <div className="relative flex min-h-screen flex-col">
      <NavBar session={session!} />
      <main className="flex-1">{children}</main>
    </div>
  )
}
