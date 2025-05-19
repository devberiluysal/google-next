import React from 'react'
import SearchHeader from '../components/SearchHeader'
import "./../globals.css"

export default function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
        <SearchHeader />
        <div>{children}</div>
    </>
  )
}
