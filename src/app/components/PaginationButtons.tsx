'use client'
import { usePathname, useSearchParams } from "next/navigation"
import Link from 'next/link'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export default function PaginationButtons() {
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const searchTerms = searchParams.get('searchTerm')
    const startIndex = +(searchParams.get('start') || 1)


  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
        {
            startIndex >= 2 && (
                <Link href={`${pathName}?searchTerm=${searchTerms}&start=${startIndex - 1}`}>
                    <div className="flex flex-col hover:underline items-center">
                        <BsChevronLeft className="h-5"/>
                        <p>Previous</p>
                    </div>
                </Link>
            )
        }
        {
            startIndex <= 90 && (
                <Link href={`${pathName}?searchTerm=${searchTerms}&start=${startIndex + 1}`}>
                    <div className="flex flex-col hover:underline items-center">
                        <BsChevronRight className="h-5"/>
                        <p>Next</p>
                    </div>
                </Link>
            )
        }
    </div>
  )
}
