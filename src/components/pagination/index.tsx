'use client'

import type { FC } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import usePagination from '~hooks/use-pagination'
import s from './index.module.scss'

interface IPagination {
	currentPage: number | string
}

const Pagination: FC<IPagination> = ({ currentPage: initialCurrentPage }) => {
	const {
		handlePrevPage,
		handleNextPage,
		currentPage,
		totalPages,
		visiblePageNumbers,
		handlePageChange,
	} = usePagination(initialCurrentPage)

	return (
		<div className={s.pagination}>
			<button
				className={s.iconWrapper}
				onClick={handlePrevPage}
				disabled={currentPage === 1}
			>
				<ChevronLeftIcon className={s.icon} />
			</button>
			{visiblePageNumbers.map(pageNumber => (
				<button
					key={pageNumber}
					className={s.pageNumber}
					onClick={() => handlePageChange(pageNumber)}
					disabled={+currentPage === pageNumber}
				>
					{pageNumber}
				</button>
			))}
			<button
				className={s.iconWrapper}
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
			>
				<ChevronRightIcon className={s.icon} />
			</button>
		</div>
	)
}

export default Pagination
