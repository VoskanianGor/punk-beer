import type { SSRPage } from '~interfaces/i-page'
import { getBeers } from '~api/get-beers'
import Search from '~components/search'
import BeerList from '~components/beer-list'
import Pagination from '~components/pagination'
import s from './index.module.scss'

const BeersPage: SSRPage = async ({ searchParams: SSRSearchParams }) => {
	const searchParams = new URLSearchParams(SSRSearchParams)
	const currentPage = searchParams.get('page') ?? 1
	const beers = await getBeers(searchParams.toString())

	return (
		<main className={s.main}>
			<Search />
			<Pagination currentPage={currentPage} />
			<BeerList beers={beers} />
		</main>
	)
}

export default BeersPage
