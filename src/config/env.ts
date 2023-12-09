import { z } from 'zod'

const env_schema = z.object({
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    NEXTJS_APP_URL: z.string().default("http://localhost:3000")
})

export function getEnv(){
    return env_schema.parse(process.env)
}


