import JoLPlayer from 'jol-player'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Jol() {
  const [videoSrc, setVideoSrc] = useState(
    'https://cdn.yct.ee/npm/barryimg@1.0.7/video/LoveMeAgain.mp4',
  )
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleButtonClick = () => {
    setVideoSrc(inputValue)
  }
  const videoUrls = [
    'https://s0.barryi.me/video/Yige.mp4',
    'https://s0.barryi.me/video/apexQQ.mp4',
    'https://s0.barryi.me/video/Shelly.mp4',
    'https://cdn.yct.ee/npm/barryimg@1.0.7/video/go.mp4',
    'https://cdn.yct.ee/npm/barryimg@1.0.7/video/LoveMeAgain.mp4',
  ]
  const handleButtonReClick = () => {
    const randomIndex = Math.floor(Math.random() * videoUrls.length)
    setVideoSrc(videoUrls[randomIndex])
  }

  return (
    <>
      <div className="mockup-window bg-base-300 left-48 w-2/3 border">
        <div className="bg-base-200 flex justify-center py-0"><JoLPlayer
          option={{
            videoSrc,
            autoPlay: true,
            width: 960,
            mode: 'widthFix',
          }}
          className=""
        /></div>
      </div>
      <div className='ml-48 mt-10'>
        <input
          placeholder="Enter video src"
          value={inputValue}
          onChange={handleInputChange}
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <motion.button onClick={handleButtonClick} className="btn btn-outline btn-primary ml-8" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>加载视频</motion.button>
        <motion.button onClick={handleButtonReClick} className="btn btn-outline btn-primary ml-8" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>随机视频</motion.button>
      </div>
    </>
  )
}

export default Jol
