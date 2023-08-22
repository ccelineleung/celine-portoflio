import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light/75'>
      <Layout className='py-3 flex items-center justify-center'>
        <span className='dark:text-light/75'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        {/* <Link href='/'>CodeBucks</Link>
        <Link href='/'>Say Hello</Link> */}
      </Layout>
    </footer>
  )
}

export default Footer