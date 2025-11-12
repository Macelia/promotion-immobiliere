import React from 'react'

import Macelia from "../assets/Macelia.png"
import Samir from "../assets/Samir.png"
import Ali from "../assets/Ali.png"
import Sedda from "../assets/Sedda.png"
import Sahra from "../assets/Sahra.png"

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">À propos de Macelia Immobilier</h2>
      <p className="text-gray-600 mb-6">Nous offrons des projets sélectionnés, un suivi personnalisé et des conseils pour vos investissements immobiliers.</p>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-3 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
          <h4 className="font-semibold">Mission</h4>
          <p className="text-gray-600 text-sm">Permettre à nos clients de trouver un logement de qualité en toute confiance.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
          <h4 className="font-semibold">Vision</h4>
          <p className="text-gray-600 text-sm">Être reconnu pour l'excellence et la transparence sur le marché local.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
          <h4 className="font-semibold">Valeurs</h4>
          <p className="text-gray-600 text-sm">Transparence, proximité, qualité.</p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Notre équipe</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  ">
          <div className="bg-white rounded-lg p-4 shadow-sm text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <img src={Macelia} alt='Macelia-ceo' className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-3"/>
            <div className="font-semibold">Macelia</div>
            <div className="text-sm text-gray-500">chief executive officer</div>
           </div>
           <div className="bg-white rounded-lg p-4 shadow-sm text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <img src={Ali} alt='Ali' className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-3"/>
            <div className="font-semibold">Ali</div>
            <div className="text-sm text-gray-500">Head of finance</div>
           </div>

          <div className="bg-white rounded-lg p-4 shadow-sm text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <img src={Sahra} alt='Sahra' className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-3"/>
            <div className="font-semibold">SaHra</div>
            <div className="text-sm text-gray-500">Responsable of sales</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <img src={Samir} alt='Nadjib' className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-3"/>
            <div className="font-semibold">Nadjib</div>
            <div className="text-sm text-gray-500">Project Manager</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <img src={Sedda} alt='Sedda' className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-3"/>
            <div className="font-semibold">Sedda</div>
            <div className="text-sm text-gray-500">Custumer Service</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage