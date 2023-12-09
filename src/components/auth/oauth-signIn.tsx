'use client'

import { OAuthProvider } from "@/types"
import { Icons } from "../custom/icons"
import { Button } from "../ui/button"
import { useState } from "react"

const oauthProviders: OAuthProvider[] = [
    { name: "google",strategy:"oauth_google", icon: "google" },
    { name: "github",strategy:"oauth_github", icon: "gitHub" },
] 

export function OAuthSignIn(){
    const [isLoading, setIsLoading] = useState< string | null>(null)

    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
        {oauthProviders.map((provider) => {
          const Icon = Icons[provider.icon]
          return (
            <Button
              aria-label={`Sign in with ${provider.name}`}
              key={provider.strategy}
              variant="outline"
              className="w-full bg-background sm:w-auto"
            //   onClick={() => void oauthSignIn(provider.strategy)}
            //   disabled={isLoading !== null}
            >
              {isLoading === provider.strategy ? (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              ) : (
                <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
              )}
              {provider.name}
            </Button>
          )
        })}
      </div>
    )
}