import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import type { ChangeEvent } from "react"
import useDebounce from "./use-debounce"


const useSearchWithRoute = () => {
  const beerName = useSearchParams().toString().split('=')[1]
  const [search, setSearch] = useState(beerName || '')
  const debouncedSearch = useDebounce(search, 600)
  const router = useRouter()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleClear = () => {
    setSearch('')
    router.push('/')
  }

  useEffect(() => {
    const params = new URLSearchParams()
    params.set('beer_name', debouncedSearch)

    if (debouncedSearch) {
      router.push(`/?${params.toString()}`)
    } else {
      router.push('/')
    }
  }, [debouncedSearch])

  return { search, handleChange, handleClear }
}

export default useSearchWithRoute