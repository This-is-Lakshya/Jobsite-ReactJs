import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"

export const Header = () => {
  return (
    <nav>
        <h1>JobSite</h1>
        <main>
            <HashLink to={"/#"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={""}>Premium</HashLink>
            <Link to={""}>Services</Link>
            <Link id='search-pg' to={"/search"}>Search</Link>
        </main>
    </nav>
  )
}