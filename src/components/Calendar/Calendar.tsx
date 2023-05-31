import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { motion } from 'framer-motion'
import { homeVariants } from '@/motionSettings'

const events = [
  { title: 'Meeting', start: new Date() },
]

export function Calendar() {
  return (
    <motion.div
    variants={homeVariants}
    initial="initial"
    animate="enter"
    exit="exit"
    transition={{ duration: 0.5, type: 'linear' }}
    >
      <h1>FullCalendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </motion.div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default Calendar
