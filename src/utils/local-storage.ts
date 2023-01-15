const getLocal = <T>(key: string): T | null => {
  if (typeof window === 'undefined') return null

  const value = localStorage.getItem(key)

  return value ? JSON.parse(value) : null
}

const setLocal = <T>(key: string, value: T) => {
  const res = JSON.stringify(value)

  localStorage.setItem(key, res)
}

const removeLocal = (key: string) => {
  localStorage.removeItem(key)
}

export { getLocal, setLocal, removeLocal }