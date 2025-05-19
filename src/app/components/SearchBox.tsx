'use client'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { useSearchParams, useRouter } from 'next/navigation'
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchBox() {
        const searchParams = useSearchParams()
        const searchTerms = searchParams.get('searchTerm')
        const [term, setTerm] = React.useState<string>(searchTerms || '')
        const router = useRouter()
        const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement>) => {
            e.preventDefault()
            if (!term.trim()) return
            router.push(`/search/web?searchTerm=${term}`)
        }
    return (
        <form className='flex border border-gray-200 rounded-full shadow-lg px-6 
        py-3 mr-5 ml-10 flex-grow max-w-3xl items-center' onSubmit={handleSubmit}>
            <input type='text' className='w-full focus:outline-none' value={term} onChange={(e) => setTerm(e.target.value)}/>
            <RxCross2 className='text-2xl text-gray-500 hover:cursor-pointer sm:mr-2' onClick={()=>setTerm('')}/>
            <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 border-l-2 
            border-gray-300 mr-3 pl-4'/>
            <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer' onClick={handleSubmit}/>
        </form>
    )
}
