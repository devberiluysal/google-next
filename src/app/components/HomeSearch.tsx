'use client'

import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'


export default function HomeSearch() {
    const [input, setInput] = useState<string>('')
    const [randomWord, setRandomWord] = useState<boolean>(false)
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!input.trim()) return
        router.push(`/search/web?searchTerm=${input}`)
    }
    const randomSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setRandomWord(true)
        const res = await fetch('https://random-word-api.herokuapp.com/word')
            .then((res)=>res.json()
            .then((data)=>data[0]))
        if (!res) return
        router.push(`/search/web?searchTerm=${res}`)
        setRandomWord(false)
    }
  return (
    <>
        <form className='w-full flex mt-5 mx-auto max-w-[90%] border 
        border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md
        transition-shadow sm:max-w-xl lg:max-w-2xl'
        onSubmit={handleSubmit}>
            <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
            <input type="text" 
            className="flex-grow focus:outline-none"
            onChange={(e) => setInput(e.target.value)} />
            <BsFillMicFill className="text-xl" />
        </form>
        <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4'>
            <button className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 
            hover:ring-gray-200 focus:outline-none active:ring-gray-300
            hover:shadow-md w-36 h-10 transition-shadow' onClick={handleSubmit}>Google Search</button>
            <button disabled={randomWord} className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 
            hover:ring-gray-200 focus:outline-none active:ring-gray-300
            hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm' onClick={randomSearch}>{
                randomWord ? 'Searching...' : 'I\'m Feeling Lucky'
            }</button>
        </div>
    </>
  )
}
