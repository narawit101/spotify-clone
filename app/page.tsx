"use client"
import React from 'react'
import NavBar from '../components/NavBar'
import Collection from '../components/Collection'
import HotMusic from '../components/HotMusic'
import PoppulaArtis from '../components/PoppularArtis'
import PoppulaAlbum from '../components/PoppularAlbum'
import PopularRadio from '@/components/PopularRadio'
import PopularChart from '@/components/PoppularChart'
import Footer from '@/components/footer'

export default function page() {
  const [isHovered, setIsHovered] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  const scrollbarHoverClass = isHovered ? 'scrollbar-visible-hover' : '';
  return (
    <div>
      <NavBar />

      <div className='flex gap-2'>
        <div className='w-[28%] ml-1 py-5 pt-5 pl-3 bg-[#121212] rounded-lg text-white '>
          <Collection />
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`
            w-[72%] py-6 pl-8 mr-1 bg-[#121212] text-white rounded-lg gap-8 flex flex-col 
            h-[90vh] overflow-y-auto 
            scrollbar-overlay transition-all duration-300
            ${scrollbarHoverClass}
          `}
        >
          <HotMusic />
          <PoppulaArtis />
          <PoppulaAlbum />
          <PopularRadio />
          <PopularChart />
          <Footer />
        </div>
      </div>
    </div>
  )
}
