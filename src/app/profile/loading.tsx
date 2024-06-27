import React from 'react'

const loading = () => {
  return (
    <div className="mt-52 w-screen flex items-center justify-center">
    <div className="flex justify-center items-center animate-spin gap-1 w-12 h-12">
      <div className="w-1/2 h-1/2 bg-rose-500 rounded-full"></div>
      {/* <div className="w-1/2 h-1/2 bg-red-700 rounded-full  "></div> */}
      <div className="w-1/2 h-1/2 bg-yellow-500 rounded-full  "></div>
    </div>
  </div>
  )
}

export default loading