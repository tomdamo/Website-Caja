import React from 'react'
import Navi from './navbar'
import Footer from './Footer'
import './Layout.css'
export function Layout(props) {
  return (
    <>
    <div className={props.class}>
<Navi/>
{props.children}
{/* <Footer/> */}
    </div>

    </>
  )
}

export default Layout