import React from 'react'

const Card = ({buttonName}) => {
    console.log(buttonName)
    
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
    <img
      className="w-full h-48 object-cover"
      src="https://via.placeholder.com/400x200"
      alt="Card"
    />
    <div className="p-4">
      <h2 className="font-bold text-xl mb-2">Card Title</h2>
      <p className="text-gray-700 text-base">
        This is a brief description of the card content. It provides a quick overview.
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {buttonName}
      </button>
    </div>
  </div>
  )
}

export default Card
