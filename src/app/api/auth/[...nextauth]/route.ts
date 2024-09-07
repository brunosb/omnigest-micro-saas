import { prisma } from '@/services/database'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import type { NextAuthConfig } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthConfig = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
	],
}

const handlers = NextAuth(authOptions)

export { handlers as GET, handlers as POST }
