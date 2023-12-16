import { authOptions } from "@/config/next-auth";
import { getServerSession } from "next-auth";

export const getNextAuthSession = async () => await getServerSession(authOptions)