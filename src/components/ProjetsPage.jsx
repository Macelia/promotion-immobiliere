
import React, { useState } from "react"
import ListingCard from "./ListingCard"
import { useNavigate } from "react-router-dom"; 

import Bahia from "../assets/Bahia.jpg"
import Horizon from "../assets/Horizon.jpg"
import Pins from "../assets/Pins.jpg"
import Amara from "../assets/Amara.jpeg"

 

const projetsEnCours = [
  {
    id: 1,
    title: "Résidence Bahia",
    location: "Zeralda",
    description: "Résidence moderne avec piscine, à proximité du littoral.",
    img: Bahia,
    area: "120 m²",
    price: "À partir de 19 000 000 DA",
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    year: 2025
  },
  {
    id: 2,
    title: "Résidence Horizon",
    location: "Cheraga",
    description: "Appartements haut standing avec vue panoramique sur la ville.",
    img: Horizon,
    area: "105 m²",
    price: "À partir de 21 000 000 DA",
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    year: 2025
  },
  {
    id: 3,
    title: "Résidence Les Pins",
    location: "Staoueli",
    description: "Projet résidentiel en cours, finitions luxueuses et espaces verts.",
    img: Pins,
    area: "150 m²",
    price: "À partir de 26 000 000 DA",
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    year: 2025
  },
  {
    id: 4,
    title: "Résidence Amara",
    location: "Bouchaoui",
    description: "Bâtiments élégants et durables, en harmonie avec la nature.",
    img: Amara,
    area: "130 m²",
    price: "À partir de 23 000 000 DA",
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    year: 2025
  },
];


export default function ProjetsPage() {
  const [selected, setSelected] = useState(null);
  const navigate =useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Projets en cours</h2>
      <p className="text-gray-600 mb-8">
        Découvrez nos résidences et villas actuellement en construction à travers l’Algérie.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
         {projetsEnCours.map((project) => (
      <div
      key={project.id}
      className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl hover:scale-[1.02] transition duration-300"
    >
      <img
        src={project.img}
        alt={project.title}
        className="h-60 w-full object-cover rounded-t-lg"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
        <p className="text-sm text-gray-500">{project.location}</p>
        <p className="mt-2 text-gray-600">{project.description}</p>
        <button
              onClick={() => setSelected(project)}
              className="mt-4 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
        >
  Plus d’infos
</button>

      </div>
    </div>
  ))}
</div>


      {/* ✅ Modal pour prévisualiser un projet */}
      {selected && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden">
      <img src={selected.img} alt={selected.title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{selected.title}</h3>
        <p className="text-gray-500">{selected.location} • {selected.area}</p>
        <p className="mt-3 text-gray-600">{selected.description}</p>

        {/* Nouvelles infos */}
        <div className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
          <div>Chambres : {selected.bedrooms}</div>
          <div>Salles de bain : {selected.bathrooms}</div>
          <div>Garage : {selected.garage}</div>
          <div>Année : {selected.year}</div>
        </div>

        <div className="mt-4 font-bold text-blue-600">{selected.price}</div>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setSelected(null)} className="px-4 py-2 border rounded-md">Fermer</button>
          <button 
          onClick={()=>{
            setSelected(null)
            navigate("/contact");
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
