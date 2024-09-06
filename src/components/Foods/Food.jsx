import React from 'react'

export default function Food({
  food: { idCategory, strCategory, strCategoryThumb, strCategoryDescription },
}) {
  return (
    <div className="max-w-sm p-6 rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={strCategoryThumb}
        alt={strCategory}
      />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">{strCategory}</h1>
        <p className="text-gray-700 text-base">
          {strCategoryDescription.slice(0, 100)}...
        </p>
      </div>
    </div>
  )
}
