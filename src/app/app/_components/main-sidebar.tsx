'use client'

import OmnigestLogo from '@/components/dashboard/omnigest-logo'
import {
	DashboardSidebar,
	DashboardSidebarFooter,
	DashboardSidebarHeader,
	DashboardSidebarMain,
	DashboardSidebarNav,
	DashboardSidebarNavHeader,
	DashboardSidebarNavHeaderTitle,
	DashboardSidebarNavLink,
	DashboardSidebarNavMain,
} from '@/components/dashboard/sidebar'
import { LayoutDashboardIcon, SettingsIcon } from 'lucide-react'
import { Session } from 'next-auth'
import { usePathname } from 'next/navigation'
import { UserDropdown } from './user-dropdown'

type MainSidebarProps = {
	user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
	const pathname = usePathname()

	const isActive = (path: string) => {
		return pathname === path
	}

	return (
		<DashboardSidebar>
			<DashboardSidebarHeader>
				<OmnigestLogo size={30} />
			</DashboardSidebarHeader>
			<DashboardSidebarMain className="flex flex-col flex-grow">
				<DashboardSidebarNav>
					<DashboardSidebarNavMain>
						<DashboardSidebarNavLink href="/app" active={isActive('/app')}>
							<LayoutDashboardIcon className="w-4 h-4 mr-3" />
							Dashboard
						</DashboardSidebarNavLink>
						<DashboardSidebarNavLink
							href="/app/settings"
							active={isActive('/app/settings')}
						>
							<SettingsIcon className="w-4 h-4 mr-3" />
							Configurações
						</DashboardSidebarNavLink>
					</DashboardSidebarNavMain>
				</DashboardSidebarNav>

				<DashboardSidebarNav className="mt-auto">
					<DashboardSidebarNavHeader>
						<DashboardSidebarNavHeaderTitle>
							Links extras
						</DashboardSidebarNavHeaderTitle>
					</DashboardSidebarNavHeader>
					<DashboardSidebarNavMain>
						<DashboardSidebarNavLink href="/">
							Precisa de ajuda?
						</DashboardSidebarNavLink>
						<DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
					</DashboardSidebarNavMain>
				</DashboardSidebarNav>
			</DashboardSidebarMain>

			<DashboardSidebarFooter>
				<UserDropdown user={user} />
			</DashboardSidebarFooter>
		</DashboardSidebar>
	)
}
