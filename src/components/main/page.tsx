import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export type PageGenericProps<T = unknown> = {
	children: ReactNode
	className?: string
} & T

export function Page({ children, className }: PageGenericProps) {
	return <section className={cn('h-screen', className)}>{children}</section>
}

export function PageHeader({ children, className }: PageGenericProps) {
	return (
		<header
			className={cn('px-6 py-3 h-[50px] border-b border-border', className)}
		>
			{children}
		</header>
	)
}

export function PageHeaderTitle({ children, className }: PageGenericProps) {
	return (
		<h1 className={cn('text-muted-foreground uppercase', className)}>
			{children}
		</h1>
	)
}

export function PageNav({ children, className }: PageGenericProps) {
	return <nav className={cn('', className)}>{children}</nav>
}

export function PageMain({ children, className }: PageGenericProps) {
	return <main className={cn('p-6', className)}>{children}</main>
}
