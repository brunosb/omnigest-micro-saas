import {
	Page,
	PageHeader,
	PageHeaderTitle,
	PageMain,
} from '@/components/main/page'

export default async function AppPage() {
	return (
		<Page>
			<PageHeader>
				<PageHeaderTitle>Dashboard</PageHeaderTitle>
			</PageHeader>
			<PageMain>
				<h1>Dashboard</h1>
			</PageMain>
		</Page>
	)
}
