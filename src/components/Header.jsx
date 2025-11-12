import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-r from-blue-600 to-teal-400 flex items-center justify-center text-white font-bold">
            MI
          </div>
          <div>
            <h1 className="font-semibold">Macelia Immobilier</h1>
            <p className="text-xs text-gray-500">Offres sélectionnées</p>
          </div>
        </Link>
    <nav className="hidden sm:flex gap-4 items-center">
        <Link to ="/projets" className='text-sm hover:text-blue-600' >Projets</Link>
        <Link to ="/a-propos" className='text-sm hover:text-blue-600' >À propos</Link>
        <Link to ="/contact" className='text-sm hover:text-blue-600' >Contact</Link>
    </nav>
    </div>
    </header>
    
  );
}

export default Header