import React from "react";

export default function ListingCard({ item, onView }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img src={item.img} alt={item.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.location} • {item.area}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-blue-600 font-bold">{item.price}</div>
          <div className="text-sm text-gray-600">{item.beds} ch.</div>
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={() => onView(item)} className="flex-1 px-3 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50">Voir</button>
          <button className="px-3 py-2 rounded-md bg-blue-600 text-white">Contact</button>
        </div>
      </div>
    </article>
  );
}
