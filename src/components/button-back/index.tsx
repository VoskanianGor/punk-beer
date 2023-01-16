'use client'

import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import s from './index.module.scss'

const ButtonBack = () => {
	const { back } = useRouter()

	return (
		<button className={s.back} onClick={back}>
			<ArrowLeftIcon className={s.icon} />
			<h2>Back to beers</h2>
		</button>
	)
}

export default ButtonBack
