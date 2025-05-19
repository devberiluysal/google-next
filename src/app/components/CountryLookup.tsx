'use client'
import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
    const [country, setCountry] = React.useState<string>('United States')
    useEffect(() => {
        const getCountry = async () => {
            const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res) => res.json()).then((data) => data.country)
            if (!res) return
            setCountry(res)
        }
        getCountry()
    }, []) 
    return (
        <div>{country}</div>
    )
}
