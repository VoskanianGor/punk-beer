'use client'

import { SunIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { cookies } from 'next/headers'
import Link from 'next/link'
import ThemeToggler from '~components/theme-toggler'
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
			>
				<Link className={s.logo} href="/">
					🍻 Punk Beer
				</Link>
				<ThemeToggler />
			</header>
			<div className={s.ghost} />
		</>
	)
}

export default Header
