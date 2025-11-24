import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ListingCard from "./components/ListingCard";
import Footer from "./components/Footer";

import iris from "./assets/iris.png"
import tipaza from "./assets/tipaza.png"
import vllaBordjElKiffan from "./assets/vllaBordjElKiffan.png"
import studiohydra from "./assets/studiohydra.png"

import ProjetsPage from "./components/ProjetsPage"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"

console.log("ProjetsPage =", ProjetsPage);
console.log("AboutPage =", AboutPage);
console.log("ContactPage =", ContactPage);




const sampleListings = [
  { id: 1, title: "Résidence Les Iris - Appartement T3", location: "Alger Centre", price: "17 500 000 DA", img: iris, beds: 2, area: "95 m²" },
  { id: 2, title: "Villas du Parc - Villa familiale", location: "Bordj El Kiffan", price: "42 000 000 DA", img: vllaBordjElKiffan, beds: 4, area: "220 m²" },
  { id: 3, title: "Studio Compact", location: "Hydra", price: "8 500 000 DA", img: studiohydra, beds: 1, area: "35 m²" },
  { id: 4, title: "Appartement Vue Mer", location: "Tipaza", price: "25 000 000 DA", img: tipaza, beds: 3, area: "130 m²" },
];

function parsePrice(priceStr) {
  return Number(priceStr.replace(/\D/g, ""));
}

function HomePage() {
  const navigate=useNavigate();
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999999);
  const [selected, setSelected] = useState(null);

  const filtered = sampleListings.filter((item) => {  
    const matchesQuery =
      query === "" ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase());
      
    const price = parsePrice(item.price);
    const inRange = price >= minPrice && price <= maxPrice;
    return matchesQuery && inRange;
  });

  return (
    
    <>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <SearchBar query={query} setQuery={setQuery} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ListingCard key={item.id} item={item} onView={(it) => setSelected(it)} />
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12">
              Aucune offre trouvée — essayez d'autres filtres.
            </div>
          )}
        </div>
      </main>

      

      {/* Simple modal preview */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden">
            <img src={selected.img} alt={selected.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{selected.title}</h3>
              <p className="text-gray-500">{selected.location} • {selected.area}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-blue-600 font-bold">{selected.price}</div>
                <div className="text-sm text-gray-600">{selected.beds} ch.</div>
              </div>

              <div className="mt-6 flex gap-3">
                <button onClick={() => setSelected(null)} className="px-4 py-2 border rounded-md">Fermer</button>
                <button 
                 onClick={() => {
                  setSelected(null);
                  navigate("/contact");
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md">Contact</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default function App(){
  
  return(

      <BrowserRouter basename="/promotion-immobiliere">
        <div className="min-h-screen bg-gray-50 text-gray-800">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/projets" element={<ProjetsPage/>} />
            <Route path="/a-propos" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>}/>

          </Routes>

           <Footer />    
      
        </div>
      </BrowserRouter>
    
  )
  
}
