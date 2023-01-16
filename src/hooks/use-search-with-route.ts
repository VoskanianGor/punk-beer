import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import type { ChangeEvent } from "react"
import useDebounce from "./use-debounce"


const useSearchWithRoute = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const initialSearch = searchParams.get('beer_name') || ''
  const [search, setSearch] = useState(initialSearch)
  const debouncedSearch = useDebounce(search, 500)
  const router = useRouter()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleClear = () => setSearch('')

  useEffect(() => {
    if (debouncedSearch) {
      params.set('beer_name', debouncedSearch)
      router.push(`/beers/?${params.toString()}`)
    } else {
      params.delete('beer_name')
      router.push(`/beers/?${params.toString()}`)
    }
  }, [debouncedSearch])

  return { search, handleChange, handleClear }
}

export default useSearchWithRoute