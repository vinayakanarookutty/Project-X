"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import React, { useState } from "react";
import {getUrl, transformer} from './shared'
import { trpc } from "./client";
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/server";

export const api = createTRPCReact<AppRouter>();

export default function TrpcProvider(props: {
  children: React.ReactNode;
  cookies: string;
}) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
  api.createClient({
    transformer,
    links: [
      loggerLink({
        enabled: (op) =>
          process.env.NODE_ENV === "development" ||
          (op.direction === "down" && op.result instanceof Error),
      }),
      httpBatchLink({
        url: getUrl(),
        headers() {
          return {
            cookie: props.cookies,
            "x-trpc-source": "react",
          };
        },
      }),
    ],
  })
);
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </trpc.Provider>
  );
}