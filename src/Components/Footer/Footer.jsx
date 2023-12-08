import React from "react"
import "./Footer.css"
import { FiChevronRight, FiSend } from "react-icons/fi"
import FooterVideo from "../assets/hero.mp4"
import { MdOutlineTravelExplore } from "react-icons/md"
import { FaTripadvisor } from "react-icons/fa"
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai"

const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={FooterVideo} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>Heep in touch</small>
            <h2>travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type='text' placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
              Send <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo'>
                <MdOutlineTravelExplore className='icon' />
                Syl
              </a>
            </div>
            <div className='footerParagraph'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              saepe id accusamus mollitia facilis ipsa. Impedit expedita
              numquam, illum eius asperiores vero deserunt velit ullam
              blanditiis, autem consequuntur! Saepe, ea.
            </div>

            <div className='footerSocials'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className='footerLinks grid'>
            <div className='linkGroup'>
              <span className='groupTitle'>Our Agency</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                payment
              </li>
            </div>

            <div className='linkGroup'>
              <span className='groupTitle'>Our Agency</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                payment
              </li>
            </div>

            <div className='linkGroup'>
              <span className='groupTitle'>Our Agency</span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                payment
              </li>
            </div>
          </div>

          <div className='footerDiv flex'>
            <small>Syl Travel web site </small>
            <small> &copy; reserved-Tanvir Hussain-2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
