import React from "react";

import Bahia from "../assets/Bahia.jpg"
import Horizon from "../assets/Horizon.jpg"
import Pins from "../assets/Pins.jpg"
import Amara from "../assets/Amara.jpeg"
export default function AboutPage() {

  const projetsEnCours=[
    {
      id: 1,
      title: "Résidence El Bahia",
      location: "Cheraga, Alger",
      description:
        "Projet résidentiel en cours comprenant 80 appartements T2 à T5 avec espaces verts et parking souterrain.",
      livraison: "Prévue pour Juin 2026",
      image: Bahia,
    },
    {
      id: 2,
      title: "Tour Horizon",
      location: "Oran Centre",
      description:
        "Immeuble de standing de 12 étages avec vue mer, bureaux modernes et commerces au rez-de-chaussée.",
      livraison: "Prévue pour Décembre 2025",
      image: Horizon,
    },
    {
      id: 3,
      title: "Résidence Les Pins",
      location: "Tipaza",
      description:
        "Complexe résidentiel en cours de réalisation avec piscines, salles de sport et espaces communautaires.",
      livraison: "Prévue pour Mars 2027",
      image: Pins,
    },
    {
      id: 4,
      title: "Résidence Amara",
      location: "Birkhadem, Alger",
      description:
        "Projet immobilier moderne composé de 60 appartements avec terrasses panoramiques et espaces de coworking.",
      livraison: "Prévue pour Octobre 2026",
      image: Amara,
    },
  ]


  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Projets en cours de construction</h2>
      <p className="text-gray-600 mb-8">
        Découvrez les futurs projets immobiliers de Macelia Immobilière actuellement en développement.
      </p>
      <div>
        {projetsEnCours.map((projet) => (
          <div>
          <div key={projetsEnCours.id}
          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
          >
            <img 
            src={projet.image}
            alt={projet.title}
            className="w-full h-48 object-cover"
            />

              <h3>{projet.title}</h3>
              <p>{projet.location}</p>
              <p>{projet.description}</p>
               <p>Livraison: {projet.livraison}</p>
          </div>
          
        </div>
        ))
        }
        

      </div>
      
    </div>
  );
}
