import { redirect } from 'next/navigation'
import type { SSRPage } from '~interfaces/i-page'

const Home: SSRPage = async ({ searchParams: SSRSearchParams }) => {
	const searchParams = new URLSearchParams(SSRSearchParams)
	searchParams.set('per_page', '8')

	if (!searchParams.has('page')) {
		searchParams.append('page', '1')
	}

	redirect(`/beers/?${searchParams.toString()}`)
}

export default Home
