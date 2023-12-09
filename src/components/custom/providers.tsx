"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import TrpcProvider from "@/lib/trpc/trpc-provider";
import { cookies } from "next/headers";

export function NextThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
}

const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}

export default function AppProvider({ children }: { children: ReactNode }) {
    return (
        <ReactQueryProvider>
            <NextThemeProvider>
                {children}
            </NextThemeProvider>
        </ReactQueryProvider>
    )
}

export { SessionProvider };