import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { homeVariants } from '@/motionSettings'

interface Props {
  imageUrl: string
}

const ImageComponent: React.FC<Props> = ({ imageUrl }) => {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl)
  const [inputImageUrl, setInputImageUrl] = useState('')
  const [isH2Created, setIsH2Created] = useState(false)

  const handleReloadImage = () => {
    setCurrentImageUrl(inputImageUrl || imageUrl)
    setInputImageUrl('')
    const logDiv = document.createElement('div')
    if (!isH2Created) {
      const h2 = document.createElement('h2')
      h2.className = 'mb-2 text-2xl'
      h2.textContent = '历史记录'
      logDiv.appendChild(h2)
      setIsH2Created(true)
    }
    const logText = document.createTextNode(inputImageUrl || imageUrl)
    logDiv.appendChild(logText)
    const logContainer = document.getElementById('log-container')
    if (logContainer)
      logContainer.appendChild(logDiv)

    else
      console.error('Log container not found')
  }

  const handleRandomUrlClick = () => {
    const urls = [
      'https://img.barryi.me',
      'https://easyimage.smitten.top/i/2023/03/06/wdvhhs.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvhm6.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvm1p.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvnf9.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvlfm.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvhlu.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvhbf.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvk15.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvr6y.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvset.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvtxw.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvstm.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvu05.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvuyv.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvsmj.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvpsq.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvszy.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvq5q.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvsar.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdw1uh.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvzw6.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvzh8.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvxma.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvxi9.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdw0wy.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdw32p.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdw0uu.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdvxts.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdw1az.webp',
      'https://easyimage.smitten.top/i/2023/03/06/wdw21z.webp',
    ]

    const randomUrl = urls[Math.floor(Math.random() * urls.length)]
    setInputImageUrl(randomUrl)
  }

  return (
    <motion.div
      variants={homeVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.5, type: 'linear' }}
    >
      <div className="mockup-window border-base-300 h-2/3 w-3/5 border">
        <div className="border-base-300 flex justify-center border-t">
        <AnimatePresence mode='wait'>
          <motion.img src={currentImageUrl} alt="Requested Image"
                key={currentImageUrl}
                initial={{ opacity: 0, x: 0, y: -200 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, y: window.innerHeight }}
                transition={{ duration: 0.5, type: 'easeInOut' }}
          />
          </AnimatePresence>
        </div>
      </div>
      <br />
      <input
        type="text"
        value={inputImageUrl}
        onChange={e => setInputImageUrl(e.target.value)}
        placeholder="输入图片链接"
        className="input input-bordered w-full max-w-xs"
      />
      <motion.button className="btn btn-outline ml-4" onClick={handleReloadImage}
        whileHover={{ scale: 1.1 }}
      >
        载入图片
      </motion.button>
      <motion.button className="btn btn-outline ml-4" onClick={handleRandomUrlClick}
        whileHover={{ scale: 1.1 }}>
        随机 URL
      </motion.button>
      <br />
      <div className="rating ml-1 mt-4 gap-1">
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
      </div>
      <div id='log-container' className='absolute right-0 top-0'>
      </div>
    </motion.div>
  )
}

export default ImageComponent
