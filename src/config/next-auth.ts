import { getServerSession, type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
    ],
    callbacks:{
        async redirect({ url, baseUrl }) {
            return baseUrl
          }
    },
    session: {
        strategy: "jwt",
    },
    secret:process.env.NEXTAUTH_SECRET
}


export const getServerAuthSession = () => getServerSession(authOptions);