import React, { useState } from "react"
import "./navbar.css"
import { MdOutlineTravelExplore } from "react-icons/md"
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
const Navbar = () => {
  const [active, setActive] = useState("navBar")
  // function to toggle navbar
  const showNav = () => {
    setActive("navBar activeNavbar")
  }
  const removeNav = () => {
    setActive("navBar")
  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <MdOutlineTravelExplore className='icon' />
            <h1>Syl.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>
                home
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                packages
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                shop
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                about
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                pages
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                news
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Contact
              </a>
            </li>

            <button className='btn'>
              <a href='#'>Book Now</a>
            </button>
          </ul>
          <div onClick={removeNav} className='closeNavbar'>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  )
}

export default Navbar
