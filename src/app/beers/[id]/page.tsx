import { getBeerById } from '~api/get-beers'
import BeerView from '~components/beer-view/page'
import ButtonBack from '~components/button-back'
import { SSRPage } from '~interfaces/i-page'
import s from './index.module.scss'

const BeerPage: SSRPage = async ({ params: { id } }) => {
	const [beerData] = await getBeerById(id)

	return (
		<main className={s.main}>
			<ButtonBack />
			<BeerView beer={beerData} />
		</main>
	)
}

export default BeerPage
