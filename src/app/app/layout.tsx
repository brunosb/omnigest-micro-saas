import type { NextAuthConfig, Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { PropsWithChildren } from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { MainSidebar } from './_components/main-sidebar'

export default async function Layout({ children }: PropsWithChildren) {
	const session = await getServerSession<NextAuthConfig, Session>(authOptions)

	return (
		<div className="grid grid-cols-[16rem_1fr] min-h-screen w-full">
			<MainSidebar user={session?.user} />

			<main>{children}</main>
		</div>
	)
}
