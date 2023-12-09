

import { inferRouterOutputs } from "@trpc/server";
import { createTrpcRouter, publicProcedure } from "./trpc";




export const appRouter = createTrpcRouter({
    hello: publicProcedure.query(() => "Hello from trpc")
});

export type AppRouter = typeof appRouter;

