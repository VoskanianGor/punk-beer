import type { FC } from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import Link from 'next/link'
import type IBeer from '~interfaces/i-beer'
import s from './index.module.scss'

interface IBeerCard {
	beer: IBeer
	descriptionLimit?: number
}

const BeerCard: FC<IBeerCard> = ({ beer, descriptionLimit = 140 }) => {
	const { name, description, image_url, id } = beer
	const descriptionText =
		description.length > descriptionLimit
			? `${description.slice(0, descriptionLimit)}...`
			: description

	return (
		<Link href={`/${id}`}>
			<div className={s.card}>
				<Image
					className={s.image}
					src={image_url}
					alt={name}
					width={100}
					height={200}
				/>
				<h2 className={s.name}>{name}</h2>
				<p className={s.description}>{descriptionText}</p>
			</div>
		</Link>
	)
}

export default BeerCard
