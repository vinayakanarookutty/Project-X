"use client"

import { useRouter } from "next/navigation"
import { Session } from "next-auth"

import { appConfig } from "@/lib/config"
import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "../ui/button"
import MainNav from "./main-nav"
import { ModeToggle } from "./mode-toggle"

type Props = {
  session: Session
}

export default function NavBar(props: Props) {
  const router = useRouter()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav items={appConfig.mainNav} />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex items-center gap-2">
            {/* <Link
                to={appConfig.links.twitter}
              > */}
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              {/* <Icons.twitter className="h-3 w-3 fill-current" /> */}
              <span className="sr-only">Twitter</span>
            </div>
            {/* </Link> */}
            <ModeToggle />
            {!props.session && (
              <>
                <Button
                  variant={"secondary"}
                  onClick={() => router.push("/auth/sign-up")}
                >
                  Sign in
                </Button>
                <Button
                  variant={"default"}
                  onClick={() => router.push("/auth/sign-up")}
                >
                  Sign Up
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
