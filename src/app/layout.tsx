import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
	title: 'Omnigest',
	description: 'Omnigest',
}

const inter = Inter({
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Toaster />
				{children}
			</body>
		</html>
	)
}
