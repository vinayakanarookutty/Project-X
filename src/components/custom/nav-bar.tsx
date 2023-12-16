"use client"

import { Session } from "next-auth"

import { appConfig } from "@/lib/config"
import { cn } from "@/lib/utils"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button, buttonVariants } from "../ui/button"
import MainNav from "./main-nav"
import { ModeToggle } from "./mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "next/link"
import { DashboardIcon, ExitIcon, GearIcon } from "@radix-ui/react-icons"
import { Icons } from "./icons"

type Props = {
  session: Session
}

export default function NavBar(props: Props) {
  const user = props.session && props.session.user 
  const initials = `${user?.name?.charAt(0) ?? ""}`
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
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <span className="sr-only">Twitter</span>
            </div>
            <ModeToggle />
            {!props.session && (
              <>
                <Button variant={"secondary"} onClick={() => signIn("google")}>
                  Sign in
                </Button>
                <Button variant={"default"}>Sign Up</Button>
              </>
            )}

            {
              user && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={user?.image}
                          alt={user?.name ?? ""}
                        />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user?.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/stores">
                          <DashboardIcon
                            className="mr-2 h-4 w-4"
                            aria-hidden="true"
                          />
                          Dashboard
                          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/billing">
                          <Icons.dollarSign
                            className="mr-2 h-4 w-4"
                            aria-hidden="true"
                          />
                          Billing
                          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/account">
                          <GearIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                          Settings
                          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <div onClick={() => signOut()}>
                        <ExitIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
          </nav>
        </div>
      </div>
    </header>
  )
}
