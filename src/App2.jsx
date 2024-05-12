import React from 'react'

import { Blog, Features, Footer, Header, Possibility, Whatgpt3 } from  './containers'
import { Brand, Navbar, Cta } from  './components'

export default function App2() {
  return (
    <>
        <div>
        <div>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <Whatgpt3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
    </>
  )
}
