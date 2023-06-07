import { useEffect, useState } from 'react'
import { Grid } from 'react-visual-grid'
import 'react-visual-grid/dist/react-visual-grid.css'
import { motion } from 'framer-motion'
import { homeVariants } from '@/motionSettings'

export function Gallery() {
  const [photoUrls, setPhotoUrls] = useState<string[]>([])

  useEffect(() => {
    fetch('https://memos.smitten.top/api/memo?creatorId=1&tag=相册')
      .then(res => res.json())
      .then((data) => {
        let urls: string[] = []
        data.data.forEach((item: { content: string }) => {
          const matches = item.content.match(/\!\[.*?\]\((.*?)\)/g)
          if (matches)
            urls = urls.concat(matches.map((match: string) => match.replace(/!\[.*?\]\((.*?)\)/g, '$1')))
        })
        setPhotoUrls(urls)
      })
      .catch()
  }, [])
  return (
    <motion.div
    variants={homeVariants}
    initial="initial"
    animate="enter"
    exit="exit"
    transition={{ duration: 0.5, type: 'linear' }}
    >
        <h1 className="my-4 text-center text-4xl font-bold">
        Memos Gallery
      </h1>
      {photoUrls.length > 0
        ? (
          <div className="mockup-window border-base-300 h-2/3 w-[96%] border">
          <div className="border-base-300 flex justify-center border-t">
          <Grid
            images={photoUrls.map((url, index) => ({ src: url, alt: `Image ${index + 1}` }))}
            width="70%"
            height="80%"
            enableResize={false}
          />
          </div>
        </div>
          )
        : (
        <div>Loading...</div>
          )}
    </motion.div>
  )
}

export default Gallery
