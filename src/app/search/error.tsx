'use client'
import React, { use, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Error({error, reset}: {error: any, reset: () => void}) {
    const searchParams = useSearchParams()
    const searchTerms = searchParams.get('searchTerm')
    const router = useRouter()
    if(!searchTerms) {
        router.push('/')
    }
    useEffect(() => {
        console.log('Error', error)
    },[error])
    const handleClick = () => {
        reset();
    }
    return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>Something went wrong!</h1>
        <button className='text-blue-500' onClick={handleClick}>Try Again</button>
        
    </div>
  )
}
