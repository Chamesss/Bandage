import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  return (
    <div className="p-4">
      <Link href={'/'}>
        {' '}
        <button className="rounded bg-black p-4 text-white">Home</button>
      </Link>
      <p>Product List</p>
    </div>
  )
}
