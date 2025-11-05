import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Promo Immobilière — Tous droits réservés
      </div>
    </footer>
  );
}
