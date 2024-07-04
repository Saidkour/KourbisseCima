import React from 'react'
import Home from '../page/HomePage'
import SelectGenre from '../components/SelectGenre'

function Genre() {
  return (
    <div>
        <div className="text-center mt-4 p-2">
          <SelectGenre/>
        </div>
        <Home/>
    </div>
  )
}

export default Genre