import { useRouter, useSearchParams } from "next/navigation"
import { useState, useRef } from "react"

const usePagination = (initialCurrentPage: string | number) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const params = new URLSearchParams(searchParams)
  const [currentPage, setCurrentPage] = useState(initialCurrentPage ?? 1)

  const totalPages = useRef(+currentPage + 10).current

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
  const startIndex = Math.max(+currentPage - 2, 1)
  const visiblePageNumbers = pageNumbers.slice(startIndex, startIndex + 4)

  const handleNextPage = () => {
    const page = Math.min(+currentPage + 1, +totalPages)
    handlePageChange(Math.min(page, +totalPages))
  }

  const handlePrevPage = () => {
    const page = Math.max(+currentPage - 1, 1)
    handlePageChange(Math.max(page, 1))
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)

    params.set('page', page.toString())
    router.push(`/beers/?${params.toString()}`)

    document.body.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    currentPage,
    totalPages,
    visiblePageNumbers,
    handleNextPage,
    handlePrevPage,
    handlePageChange,
  }
}

export default usePagination