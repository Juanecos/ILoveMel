
import React from 'react'

const Image = ({ image, description }) => {
  return (
    <>
        <img className='image m-5' src={image} alt={description} />
    </>
  )
}

export default Image