import React, { useEffect } from "react"
import "./Main.css"
import { HiOutlineLocationMarker } from "react-icons/hi"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/Tanguar-Haor.jpg"
import img8 from "../assets/Ratargul_Swamp_forest_Entrance.jpg"
import img9 from "../assets/Jaflong.jpg"
import img10 from "../assets/lalakhal.png"
import Aos from "aos"
import "aos/dist/aos.css"
const Data = [
  {
    id: 1,
    imgSrc: img10,
    desTitle: "Lalakhal",
    location: "Jaintiapur Upazila, Sylhet",
    grade: "River",
    fees: "$120",
    description:
      "Lalakhal is a tourist spot in Jaintiapur, Sylhet District, Bangladesh. Lalakhal is a wide channel in the Sharee River near the Tamabil road. The river is not very deep and is one of the sources of sand in Sylhet.",
  },
  {
    id: 9,
    imgSrc: img2,
    desTitle: "Jaflong",
    location: "Gowainghat Upazila Sylhet",
    grade: "River",
    fees: "$140",
    description:
      "Jaflong is a hill station and tourist destination in the Division of Sylhet, Bangladesh. It is located in Gowainghat Upazila of Sylhet District and situated at the border between Bangladesh and the Indian state of Meghalaya, overshadowed by subtropical mountains and rainforests.",
  },
  {
    id: 3,
    imgSrc: img8,
    desTitle: "Ratargul Swamp Forest",
    location: "Gowainghat,Sylhet",
    grade: "River",
    fees: "$120",
    description:
      "Ratargul Swamp Forest is a freshwater swamp forest located in Gowain River, Fatehpur Union, Gowainghat, Sylhet, Bangladesh. Ratargul was once thought to be the only swamp forest in Bangladesh, and one of the few freshwater swamp forests in the world",
  },
  {
    id: 4,
    imgSrc: img7,
    desTitle: "Tanguar Haor",
    location: "Sylhet",
    grade: "Haor",
    fees: "$300",
    description:
      "Tanguar Haor, located in the Dharmapasha and Tahirpur upazilas of Sunamganj District in Bangladesh, is a unique wetland ecosystem of national importance and has come into international focus. The area of Tanguar Haor including 46 villages within the haor is about 100 square kilometres of which 2,802.36 ha² is wetland.",
  },
  {
    id: 5,
    imgSrc: img1,
    desTitle: "Lalakhal",
    location: "Sylhet",
    grade: "River",
    fees: "$120",
    description: "lorem text here",
  },
  {
    id: 6,
    imgSrc: img2,
    desTitle: "Lalakhal",
    location: "Sylhet",
    grade: "River",
    fees: "$120",
    description:
      "lorem text here lorem text here lorem text here lorem text here lorem text here lorem text here lorem text here",
  },
  {
    id: 7,
    imgSrc: img3,
    desTitle: "Lalakhal",
    location: "Sylhet",
    grade: "River",
    fees: "$120",
    description: "lorem text here",
  },
  {
    id: 8,
    imgSrc: img4,
    desTitle: "Lalakhal",
    location: "Sylhet",
    grade: "River",
    fees: "$120",
    description: "lorem text here",
  },
  {
    id: 9,
    imgSrc: img5,
    desTitle: "Lalakhal",
    location: "Sylhet",
    grade: "River",
    fees: "$120",
    description: "lorem text here",
  },
  {
    id: 10,
    imgSrc: img6,
    desTitle: "Lalakhal",
    location: "Sylhet",
    grade: "River",
    fees: "$120",
    description: "lorem text here",
  },
]

const Main = () => {
  // lets create a react hook to add a scroll animation.....
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>Most Visited destination</h3>
      </div>

      <div className='secContent'>
        {Data.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div data-aos='fade-up' key={id} className='singleDestination'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt='' />
                </div>
                <div className='cardInfo'>
                  <h4 className='destTitle'>{desTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className='fees flex'>
                    <div className='grade'>
                      <span>
                        {grade} <small>+1</small>
                      </span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className='desc'>
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DeTAILS <HiOutlineLocationMarker className='icon' />
                  </button>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Main
