import Image from 'next/image'
import React from 'react'
import { Movie } from '../types'
import BgImg from "../public/bg.jpg";

interface IBanner {
  top: Movie[];
}

function Banner ({top}: IBanner) {

  return (
    <div>
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image className="w-screen h-screen" src={BgImg} alt="banner" placeholder="blur" />
      </div>
    </div>
  )
}

export default Banner