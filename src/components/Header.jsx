import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-r from-blue-600 to-teal-400 flex items-center justify-center text-white font-bold">
            PI
          </div>
          <div>
            <h1 className="font-semibold">Promo Immobilière</h1>
            <p className="text-xs text-gray-500">Offres sélectionnées</p>
          </div>
        </div>

        <nav className="hidden sm:flex gap-4 items-center">
          <a className="text-sm hover:text-blue-600" href="#">Projets</a>
          <a className="text-sm hover:text-blue-600" href="#">À propos</a>
          <a className="text-sm hover:text-blue-600" href="#">Contact</a>
          <button className="ml-2 px-3 py-1 rounded-md bg-blue-600 text-white text-sm">Se connecter</button>
        </nav>
      </div>
    </header>
  );
}
