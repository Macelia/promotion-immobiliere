import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";



export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // simple regex pour valider un email
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setError("Adresse e-mail invalide");
    } else {
      setError("");
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-10 border border-gray-200"
      >
        {/* Titre */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Contactez-nous
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Informations */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-1">
      <label className="flex items-center space-x-2 text-gray-700 font-medium">
        <Mail className="text-blue-600" size={24} />
        <span>Email</span>
        </label>
        <input 
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="maceliaimmobilier@macelia-immobilier.dz"
        className={`w-full p-3 border rounded-xl focus:ring-2 outline-none ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
            

            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" size={28} />
              <p className="text-lg text-gray-700">+213 500 00 00 00</p>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" size={28} />
              <p className="text-lg text-gray-700">
                Alger, Wilaya d'Alger, Algérie
              </p>
            </div>

            <p className="text-gray-600 mt-6">
              Nous serions ravis d’échanger avec vous.  
              Remplissez simplement le formulaire et nous vous répondrons rapidement.
            </p>
          </div>

          {/* Formulaire */}
          <form className="space-y-4">
            <div>
              <label className="text-gray-700 font-medium">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Votre message..."
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md"
            >
              Envoyer
              <Send size={20} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
