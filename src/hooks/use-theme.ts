import { proxy, useSnapshot } from 'valtio'
import { setCookie, parseCookies } from 'nookies'

type Theme = 'light' | 'dark'

interface IThemeStore {
	theme: Theme
	toggle: VoidFunction
	isDark: boolean
}

const THEME_KEY = 'theme'

const theme = parseCookies()?.theme as Theme

export const themeStore = proxy<IThemeStore>({
	theme: theme ?? 'light',
	toggle: () => {
		const nextTheme = themeStore.theme === 'light' ? 'dark' : 'light'

		themeStore.theme = nextTheme
		document.documentElement.classList.toggle('dark-theme')
		setCookie(null, THEME_KEY, nextTheme)
	},
	get isDark() {
		if (themeStore.theme === 'dark') return true

		return false
	},
})

const useTheme = () => useSnapshot(themeStore)

export default useTheme
