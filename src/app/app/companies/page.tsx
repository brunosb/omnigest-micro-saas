import {
	Page,
	PageHeader,
	PageHeaderTitle,
	PageMain,
} from '@/components/main/page'
import { CompanyDataTable } from './_components/company-data-table'

export default function CompaniesPage() {
	return (
		<Page>
			<PageHeader>
				<PageHeaderTitle>Empresas</PageHeaderTitle>
			</PageHeader>
			<PageMain>
				<CompanyDataTable />
			</PageMain>
		</Page>
	)
}
