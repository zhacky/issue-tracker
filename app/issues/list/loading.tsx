import React from 'react'
import { Table } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";
import IssueActions from "@/app/issues/list/IssueActions";

const LoadingIssuesPage = () => {
	const issues = [1, 2, 3, 4, 5];
	return (
		<div>
			<IssueActions />
			<Table.Root variant='surface'>
				<Table.Header>
					<Table.Row>
						<Table.ColumnHeaderCell>
							Issue
						</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>
							<div className='hidden md:table-cell'>
								Status
							</div>
						</Table.ColumnHeaderCell>
						<Table.ColumnHeaderCell>
							<div className='hidden md:table-cell'>
								Created
							</div>
						</Table.ColumnHeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{issues.map(issue => (
						<Table.Row key={issue}>
							<Table.Cell><Skeleton /></Table.Cell>
							<Table.Cell>
								<div className='hidden md:table-cell'>
									<Skeleton />
								</div>
							</Table.Cell>
							<Table.Cell>
								<div className='hidden md:table-cell'>
									<Skeleton />
								</div>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</div>
	)
}
export default LoadingIssuesPage
