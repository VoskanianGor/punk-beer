import Image from 'next/image'
import type { FC } from 'react'
import type IBeer from '~interfaces/i-beer'
import s from './index.module.scss'

interface IBeerView {
	beer: IBeer
}

const BeerView: FC<IBeerView> = ({ beer }) => {
	const { name, abv, description, food_pairing, image_url, tagline } = beer

	return (
		<div className={s.wrapper}>
			<div className={s.imageWrapper}>
				<Image
					className={s.image}
					src={image_url ?? '/assets/images/beer-placeholder.png'}
					alt={name ?? 'Just Beer'}
					width={120}
					height={240}
				/>
			</div>
			<section className={s.content}>
				<div className={s.heading}>
					<h1 className={s.name}>{name}</h1>
					<p className={s.tagline}>{tagline}</p>
					<p className={s.abv}>abv: {abv}%</p>
				</div>
				<p className={s.description}>{description}</p>
				<div className={s.food}>
					Perfect with{' '}
					<pre className={s.foodList}>{food_pairing?.join('\n')}</pre>
				</div>
			</section>
		</div>
	)
}

export default BeerView
