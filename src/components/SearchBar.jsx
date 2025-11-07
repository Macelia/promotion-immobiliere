import React from "react";

const SearchBar = ({ query, setQuery, setMinPrice, setMaxPrice }) => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-white via-blue-50 to-white p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-2">Trouvez votre futur logement</h2>
      <p className="text-gray-600 mb-4">
        Recherche rapide, filtres essentiels et aperçu des meilleures offres.
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="col-span-2 p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Rechercher par titre ou localisation..."
        />

        <div className="flex gap-2">
          <input
            type="number"
            onChange={(e) => setMinPrice(Number(e.target.value || 0))}
            placeholder="Min (DA)"
            className="p-3 rounded-md border border-gray-200 w-full"
          />
          <input
            type="number"
            onChange={(e) => setMaxPrice(Number(e.target.value || 999999999))}
            placeholder="Max (DA)"
            className="p-3 rounded-md border border-gray-200 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
