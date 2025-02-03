import { motion } from "motion/react"

// import React from 'react'

const App = () => {
  return (
    <div>
      {/* <motion.div
        animate={{
          x: 1500,
          rotate: 360, 
        }}
        transition={{
          duration: 2,
          delay: 1
        }}
        className="box"></motion.div> */}
      

      <motion.img
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300,300 , 0],
          rotate: [0 , 360 , 0 , -360]
        }}
        transition={{
          duration: 3,
          repeat:Infinity,
          ease:'anticipate'
        }}
        src="https://imgs.search.brave.com/T1HulNLuhFjzmvN3cq9G3rrsrhBMGFtio8RcBdRRKQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEyL1No/aW4tQ2hhbi1CYWNr/Z3JvdW5kLVBORy5w/bmc" height={150} alt="" />
    </div>
  )
}

export default App
