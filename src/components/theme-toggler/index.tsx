'use client'

import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import useTheme from '~hooks/use-theme'
import s from './index.module.scss'

const ThemeToggler = () => {
	const { isDark, toggle } = useTheme()

	return (
		<button className={s.toggler} onClick={toggle} title="change theme">
			{isDark ? (
				<SunIcon className={s.icon} />
			) : (
				<MoonIcon className={s.icon} />
			)}
		</button>
	)
}

export default ThemeToggler
