import { z } from 'zod'

const env_schema = z.object({
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    NEXTJS_APP_URL: z.string().default("http://localhost:3000"),
    NEXTAUTH_SECRET: z.string()
})

const parsedEnv = env_schema.safeParse(process.env)
export const getEnv = () => parsedEnv.success ? parsedEnv.data : null
