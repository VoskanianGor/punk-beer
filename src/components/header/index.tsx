'use client'

import { SunIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import Link from 'next/link'
import useScroll from '~hooks/use-scroll'
import s from './index.module.scss'

const Header = () => {
	const isScrolled = useScroll(100)

	return (
		<>
			<header
				className={clsx(s.header, 'container', {
					[s.scrolled]: isScrolled,
				})}
				onScroll={() => {
					console.log('scroll')
				}}
			>
				<Link className={s.logo} href="/">
					🍻 Punk Beer
				</Link>
				<button>
					<SunIcon />
				</button>
			</header>
			<div className={s.ghost} />
		</>
	)
}

export default Header
