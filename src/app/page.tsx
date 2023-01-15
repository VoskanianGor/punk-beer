import { IPage } from '~interfaces/i-page'
import { redirect } from 'next/navigation'

interface SearchParams {
	beer_name?: string
	page?: string | number
	per_page?: string | number
}

const Home: IPage = async ({ searchParams: SSRSearchParams }) => {
	const searchParams = new URLSearchParams(SSRSearchParams)
	searchParams.set('per_page', '9')

	if (!searchParams.has('page')) {
		searchParams.append('page', '1')
	}

	redirect(`/beers/?${searchParams.toString()}`)
}

export default Home
