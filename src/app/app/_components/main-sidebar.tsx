'use client'

import OmnigestLogo from '@/components/main/omnigest-logo'
import {
	Sidebar,
	SidebarFooter,
	SidebarHeader,
	SidebarMain,
	SidebarNav,
	SidebarNavHeader,
	SidebarNavHeaderTitle,
	SidebarNavLink,
	SidebarNavMain,
} from '@/components/main/sidebar'
import { BuildingIcon, LayoutDashboardIcon, SettingsIcon } from 'lucide-react'
import { Session } from 'next-auth'
import { usePathname } from 'next/navigation'
import { UserDropdown } from './user-dropdown'

type MainSidebarProps = {
	user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
	const pathname = usePathname()

	const isActive = (path: string) => {
		if (path === '/app') {
			return pathname === '/app'
		}
		return pathname.startsWith(path) && pathname !== '/app'
	}

	return (
		<Sidebar>
			<SidebarHeader>
				<OmnigestLogo size={30} />
			</SidebarHeader>
			<SidebarMain className="flex flex-col flex-grow">
				<SidebarNav>
					<SidebarNavMain>
						<SidebarNavLink href="/app" active={isActive('/app')}>
							<LayoutDashboardIcon className="w-4 h-4 mr-3" />
							Dashboard
						</SidebarNavLink>
						<SidebarNavLink
							href="/app/companies"
							active={isActive('/app/companies')}
						>
							<BuildingIcon className="w-4 h-4 mr-3" />
							Empresas
						</SidebarNavLink>
						<SidebarNavLink
							href="/app/settings"
							active={isActive('/app/settings')}
						>
							<SettingsIcon className="w-4 h-4 mr-3" />
							Configurações
						</SidebarNavLink>
					</SidebarNavMain>
				</SidebarNav>

				<SidebarNav className="mt-auto">
					<SidebarNavHeader>
						<SidebarNavHeaderTitle>Links extras</SidebarNavHeaderTitle>
					</SidebarNavHeader>
					<SidebarNavMain>
						<SidebarNavLink href="/">Precisa de ajuda?</SidebarNavLink>
						<SidebarNavLink href="/">Site</SidebarNavLink>
					</SidebarNavMain>
				</SidebarNav>
			</SidebarMain>

			<SidebarFooter>
				<UserDropdown user={user} />
			</SidebarFooter>
		</Sidebar>
	)
}
