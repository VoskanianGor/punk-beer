'use client'

import type { FC } from 'react'
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
		<Link href={`/beers/${id}`}>
			<div className={s.card}>
				<Image
					className={s.image}
					src={image_url ?? '/assets/images/beer-placeholder.png'}
					alt={name}
					width={80}
					height={180}
				/>
				<h2 className={s.name}>{name}</h2>
				<p className={s.description}>{descriptionText}</p>
			</div>
		</Link>
	)
}

export default BeerCard
