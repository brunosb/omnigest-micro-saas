import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOutIcon, Rocket, SettingsIcon } from 'lucide-react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

type UserDropdownProps = {
	user: Session['user']
}

export function UserDropdown({ user }: UserDropdownProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="relative h-8 flex items-center justify-between w-full space-x-2 !px-0"
				>
					<Avatar className="h-8 w-8">
						{user?.image && (
							<AvatarImage src={user.image} alt={user.name || ''} />
						)}
						<AvatarFallback>OG</AvatarFallback>
					</Avatar>

					<div className="flex flex-col flex-1 space-y-1 text-left">
						<p className="text-sm font-medium leading-none">
							{user?.name ?? 'Usuário'}
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{user?.email ?? 'email@example.com'}
						</p>
					</div>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">
							{user?.name ?? 'Usuário'}
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{user?.email ?? 'email@example.com'}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<SettingsIcon className="w-4 h-4 mr-3" />
						Configurações
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Rocket className="w-4 h-4 mr-3" />
						Upgrade
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => signOut()}>
					<LogOutIcon className="w-4 h-4 mr-3" />
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
