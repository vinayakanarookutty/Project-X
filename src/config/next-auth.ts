import { getServerSession, type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getEnv } from "@/config/env";

const env = getEnv()

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        }),
        // ...add more providers here
    ],
    callbacks:{
        async redirect({ url, baseUrl }) {
            return baseUrl
          }
    }
}


export const getServerAuthSession = () => getServerSession(authOptions);