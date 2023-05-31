import React from 'react'
import { Rose } from '@ant-design/charts'
import { motion } from 'framer-motion'
import { homeVariants } from '@/motionSettings'

function RoseCharts() {
  const data = [
    {
      type: '分类一',
      value: 27,
      user: '用户一',
    },
    {
      type: '分类二',
      value: 25,
      user: '用户一',
    },
    {
      type: '分类三',
      value: 18,
      user: '用户一',
    },
    {
      type: '分类四',
      value: 15,
      user: '用户一',
    },
    {
      type: '分类五',
      value: 10,
      user: '用户一',
    },
    {
      type: '其它',
      value: 5,
      user: '用户一',
    },
    {
      type: '分类一',
      value: 7,
      user: '用户二',
    },
    {
      type: '分类二',
      value: 5,
      user: '用户二',
    },
    {
      type: '分类三',
      value: 38,
      user: '用户二',
    },
    {
      type: '分类四',
      value: 5,
      user: '用户二',
    },
    {
      type: '分类五',
      value: 20,
      user: '用户二',
    },
    {
      type: '其它',
      value: 15,
      user: '用户二',
    },
  ] // 堆叠玫瑰图

  const config = {
    data,
    xField: 'type',
    yField: 'value',
    isStack: true,
    // 当 isStack 为 true 时，该值为必填
    seriesField: 'user',
    radius: 0.9,
    label: {
      offset: -15,
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  }
  return <motion.div
  variants={homeVariants}
  initial="initial"
  animate="enter"
  exit="exit"
  transition={{ duration: 0.5, type: 'linear' }}
  ><Rose {...config} /></motion.div>
}

export default RoseCharts
