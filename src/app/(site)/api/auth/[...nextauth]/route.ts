import NextAuth from "next-auth/next";

import { options } from "@/app/(site)/lib/auth";


const handler = NextAuth(options);

export {handler as GET, handler as POST};