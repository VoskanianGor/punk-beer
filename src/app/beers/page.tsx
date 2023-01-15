import Image from 'next/image'
import Input from '~components/search'
import { getBeers } from '~api/get-beers'
import s from './index.module.scss'
import BeerList from '~components/beer-list'
import { IPage } from '~interfaces/i-page'
import Pagination from '~components/pagination'

interface SearchParams {
	beer_name?: string
	page?: string | number
	per_page?: string | number
}

const BeersPage: IPage = async ({ searchParams: SSRSearchParams }) => {
	const searchParams = new URLSearchParams(SSRSearchParams)
	const beers = await getBeers(searchParams.toString())
	const currentPage = searchParams.get('page') ?? 1

	return (
		<main className={s.main}>
			<Input />
			<Pagination currentPage={currentPage} />
			<BeerList beers={beers} />
		</main>
	)
}

export default BeersPage
